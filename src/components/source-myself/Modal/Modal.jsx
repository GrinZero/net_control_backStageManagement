import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import styles from "./modal.module.css";

const modalControl = {
  addChild: null,
  removeChild: null,
};

function ModalItem(props) {
  const [show, setShow] = useState(props.show);
  useEffect(() => {
    if (props.show === false) {
      setShow(false);
    }
  }, [props.show]);
  return (
    <div
      className={`flexCenter ${styles["modal-item"]} ${
        show ? "" : styles["modal-item-hidden"]
      } `}
      style={{ "--duration--": props.config.duration + "ms" }}
    >
      {props.children}
    </div>
  );
}

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nodeList: [],
      activeIDList: [],
    };
    const addChild = async (item, config={
      delay: 1500,
      duration: 360,
    }) => {
      let nodeNew = [...this.state.nodeList];
      let id = new Date().getTime();
      nodeNew.push({
        node: item,
        config,
        id,
      });
      let newActiveIDList = [...this.state.activeIDList, id];
      return new Promise((resolve) => {
        this.setState(
          {
            activeIDList: newActiveIDList,
            nodeList: nodeNew,
          },
          () => {
            resolve(nodeNew.length - 1);
          }
        );
      });
    };
    const removeChild = async (key) => {
      let {config,id:nodeID} = this.state.nodeList[key];
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let newActiveIDList = this.state.activeIDList.filter(
            (item) => item !== nodeID
          );
          this.setState(
            {
              activeIDList: newActiveIDList,
            },
            () => {
              let newNodeList = this.state.nodeList.filter(
                (item) => item.id !== nodeID
              );
              setTimeout(() => {
                this.setState(
                  {
                    nodeList: newNodeList,
                  },
                  () => {
                    resolve();
                  }
                );
              }, config.duration);
            }
          );
        }, config.delay);
      });
    };
    modalControl.addChild = addChild;
    modalControl.removeChild = removeChild;
  }
  render() {
    return (
      <div className={`${styles["modal-container"]}`}>
        {this.state.nodeList.map((item, index) => (
          <ModalItem
            key={item.id}
            show={this.state.activeIDList.indexOf(item.id) !== -1}
            // run={this.state.activeIDList.length > 0 ? true : false}
            config={item.config}
          >
            {item.node}
          </ModalItem>
        ))}
      </div>
    );
  }
}

(function initModalContainer() {
  let ele = document.getElementById("source-modal-contain");
  if (!ele) {
    let sourceModalContainer = document.createElement("div");
    sourceModalContainer.id = "source-modal-contain";
    document.body.append(sourceModalContainer);
    ele = document.getElementById("source-modal-contain");
    ReactDOM.render(<ModalContainer />, ele);
  }
})();
export { modalControl };
