import React, { useState } from "react";
import { modalControl } from "../Modal/Modal.jsx";
import styles from "./message.module.css";
import successSvg from "../images/success.svg";
import failSvg from "../images/fail.svg";

function MessageTemplate(props) {
  const svgmap = {
    success: successSvg,
    fail: failSvg,
  };
  return (
    <div
      className={`${styles[props.type + "-template"]} ${styles["template"]}`}
      onClick={() => {
        console.log("test");
      }}
    >
      <img
        src={svgmap[props.type]}
        width="30"
        height="30"
        style={{ margin: "6px" }}
      ></img>
      <span>{props.content}</span>
    </div>
  );
}
const defaultConfig = {
  delay: 1500,
  duration: 360,
};
function messageConfig(type) {
  return function (e) {
    let options = {
      ...defaultConfig,
      ...e,
    };
    return async function (content) {
      let key = await modalControl.addChild(
        <MessageTemplate type={type} content={content || options.content} />,
        options
      );
      await modalControl.removeChild(key);
    };
  };
}
function message(type) {
  return async function (content) {
    let key = await modalControl.addChild(
      <MessageTemplate type={type} content={content} />,
      defaultConfig
    );
    await modalControl.removeChild(key);
  };
}
function PopupMessage(props) {
  const [show, setShow] = useState(false);
  return (
    <span
      className={`${styles.popupMessageContain}`}
      onClick={(e) => {
        setShow(!show);
      }}
    >
      {props.children}
      {show ? (
        <div className={`${styles[`popupMessage-${props.direction}`]}`}>
          {props.message}
        </div>
      ) : (
        <></>
      )}
    </span>
  );
}

const Message = {
  success: message("success"),
  fail: message("fail"),
  messageConfig,
  PopupMessage,
};
export default Message;
export { PopupMessage };
