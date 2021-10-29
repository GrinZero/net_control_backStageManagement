import React, { useState } from "react";
import styles from "./index.module.css"
import { useSelector, useDispatch, useCallback, memo } from "react-redux";
import { handleWorkSpaceShow, progressTo } from "../../../actions/workspace";
import NewNet from "../NewNet/index.jsx";
import NewNetSec from "../NewNetSec/index.jsx";
import store from "../../../store";

const 提示png = "https://z3.ax1x.com/2021/10/18/5tzTwd.png";
const 订单png = "https://z3.ax1x.com/2021/10/18/5tzRW6.png";
const funListIcon0 = "https://z3.ax1x.com/2021/10/16/5J4IsS.png";
const funListIcon1 = "https://z3.ax1x.com/2021/10/16/5J47ZQ.png";
const WorkThings = {
  newNet: <NewNet />,
  newNetSec:<NewNetSec/>
};

function Workspace() {
  const dispatch = useDispatch();
  const running = useSelector((state) => state.workspaceReducer.running);
  const progress = useSelector((state) => state.workspaceReducer.progress);
  const initData = useSelector((item) => item.workspaceReducer.initData);
  const funList = [
    {
      icon: funListIcon0,
      text: "网络办理/续费",
      fun: () => {
        dispatch(progressTo.newNet);
      },
    },
    {
      icon: funListIcon1,
      text: "问题单处理",
      fun: () => {
        dispatch(progressTo.problem);
      },
    },
  ];
  const noneStart = (
    <div className={`w-full md:h-full flex flex-row flex-wrap text-gray-300`}>
      {funList.map((item) => (
        <div
          className={`flexCenter shadow-sm ${styles["funListItem"]} hover:shadow-2xl hover:rounded-lg md:w-48 md:h-48 cursor-pointer transition-shadow`}
          onClick={() => {
            dispatch(handleWorkSpaceShow(true));
            item.fun?.();
          }}
          key={item.text}
        >
          <span className={`mb-3 text-xs md:text-base`}>{item.text}</span>
          <img src={item.icon} className={`w-8 h-8 md:w-11 md:h-11`}></img>
        </div>
      ))}
    </div>
  );
  const toDo = [
    {
      text: "待导出单数",
      num: initData.data.toExportNum,
      after: "单",
      icon: 订单png,
    },
    {
      text: "未验证单数",
      num: initData.data.toNoneNum,
      after: "单",
      icon: 提示png,
    },
  ];
  return (
    <div
      className={`w-full bg-white bd-r-4 select-none shadow-sm relative`}
    >
      {running ? (
        <div className={`w-full h-full`}>
          {/* 信息槽 */}
          <div
            className={`w-95% mt-2 md:mt-5 h-20 rounded-lg bg-gray-100 flexRow justify-evenly items-center mb-2 md:mb-5`}
            style={{'marginLeft':"2.5%"}}
          >
            {toDo.map((item) => (
              <div
                className={`flex flex-col text-gray-400 text-sm border-r-2 border-gray-300 items-center last:border-0`}
                key={item.text}
                style={{ width: `calc(${(1 / toDo.length) * 100 + "%"})` }}
              >
                <div className={`flex-col flex`}>
                  <span>{item.text}▸</span>
                  <div className={`flex flex-row items-center mt-2`}>
                    <img
                      src={item.icon}
                      className={`w-6 h-6 bg-white rounded-full`}
                    ></img>
                    <span>
                      <span className={`text-black text-xl mx-3`}>
                        {item.num}
                      </span>
                      {item.after}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {WorkThings[progress]}
        </div>
      ) : (
        noneStart
      )}
    </div>
  );
}

export default Workspace;
