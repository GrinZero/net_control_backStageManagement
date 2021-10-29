import React, { useEffect } from "react";
import "./index.css";
import { NavContainer } from "../../components/NavContainer/NavContainer.jsx";
import { WorkInfo, WorkSpace, WorkMessage } from "./NetIndex.js";
import { useSelector, useDispatch } from "react-redux";
import { initWorkAreaData } from "../../actions/workspace.js";

function NetIndex() {
  const dispatch = useDispatch();
  const running = useSelector((state) => state.workspaceReducer.running);
  useEffect(() => {
    if (!running) {
      dispatch(initWorkAreaData());
    }
  },[running]);
  return (
    <NavContainer>
      <div className={`flex flex-row w-full mt-6 md:min-h-0 md:w-nor md:ml-6`}>
        <div className={`flex flex-col items-center work`}>
          <WorkInfo />
          <WorkSpace />
          <div className={`block md:hidden w-full mt-5`}>
            <WorkMessage />
          </div>
        </div>
        <div className={`hidden md:block`}>
          <WorkMessage />
        </div>
      </div>
      <div className={`w-full h-6 block md:hidden`}>

      </div>
    </NavContainer>
  );
}

export default NetIndex;
