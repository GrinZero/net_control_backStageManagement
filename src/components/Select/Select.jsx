import React, { useCallback, useState, useEffect,useRef } from "react";
import { createPortal } from "react-dom";
import styles from "./index.module.css";

function Select(props) {
  const [index, setIndex] = useState(props.init);
  const [active, setActive] = useState(false);
  const [width,setWidth]=useState(0)
  let handleClick = useCallback((e) => {
    e.stopPropagation();
    if (active){
      setActive(false)
      document.removeEventListener("click", handleClick);
    };
  });
  const me=useRef()
  useEffect(() => {
    setWidth(me.current.clientWidth)
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
  return (
    <div
      className={`${styles["select"]} ${active ? styles["active"] : ""}`}
      ref={me}
      style={{ maxWidth: props.maxWidth }}
      onClick={(e) => {
        e.stopPropagation();
        setActive(!active);
      }}
    >
      <span>{props.range[index]}</span>
      <i className={`fas fa-chevron-down ${styles["i"]}`}></i>
      {active ? (
        <div className={`${styles["options"]}`}>
          <div className={`${styles["optionsIn"]}`} style={{width:width}}>
            {props.range.map((item, id) => (
              <div
                className={`${styles["rangeitem"]} ${
                  index === id ? styles["rangeitem-active"] : ""
                }`}
                key={item}
                onClick={() => {
                  setIndex(id)
                  props?.onChange(id)
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Select;
