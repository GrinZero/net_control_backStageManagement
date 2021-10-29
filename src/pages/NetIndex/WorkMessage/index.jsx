import React, { useState } from "react";
import styles from "./index.module.css"
import { useSelector, useDispatch } from "react-redux";
import NewNetMessage from "../NewNetMessage/index.jsx";
import NewNetSecMessage from "../NewNetSecMessage/index.jsx";
import NoneMessage from "../NoneMessage/index.jsx"


function WorkMessage() {
  const progress = useSelector((state) => state.workspaceReducer.progress);
  const nodeMap = {
    newNet: <NewNetMessage />,
    newNetSec:<NewNetSecMessage/>,
    none:<NoneMessage/>
  };
  return (
    <>
      <div
        className={`flex bg-white ${styles["message"]} bd-r-4 shadow-sm overflow-auto`}
      >
        {nodeMap[progress]}
      </div>
    </>
  );
}

export default WorkMessage;
