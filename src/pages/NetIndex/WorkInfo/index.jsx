import React, { useState } from "react";
import styles from "./index.module.css";
import { useSelector } from "react-redux";

function WorkInfoLeft() {
  const initData=useSelector(item=>item.workspaceReducer.initData)
  const source=initData.data
  let sourceList = [
    {
      key: "toDoNum",
      bgColor: "#5c7ceb",
      desc: "待处理单数",
      after: "单",
    },
    {
      key: "todayMoney",
      bgColor: "#4cccd4",
      desc: "今日新增单金额",
      after: "元",
    },
    {
      key: "todayNum",
      bgColor: "#fdab3b",
      desc: "今日新增单数",
      after: "单",
    },
  ];
  return (
    <>
      <div
        className={`${styles["work-info-left"]} flex-col items-center w-full md:w-1/3 h-full flex p-4`}
      >
        <div
          className={`${styles["work-info-todomoney"]} relative text-2xl flex flex-row items-center w-full p-4 h-24 text-white shadow-lg`}
          style={{
            "--tw-shadow":
              "0 10px 15px -3px #637ef420, 0 8px 12px -3px #637ef450",
          }}
        >
          <div className={`flex flex-col`}>
            <span className={`text-xs mb-2 font-light`}>待处理金额</span>
            <div className={`yuan`}>{source.toDoMoney}</div>
          </div>
        </div>
        <div className={`flex flex-col items-center w-full mt-3`}>
          {sourceList.map((item) => (
            <div
              className={`flex flex-row items-center py-3.5 w-full relative overflow-hidden xl:whitespace-nowrap work-info-item md:justify-center`}
              key={item.key}
            >
              <span
                style={{ background: item.bgColor }}
                className={`h-full w-2 mr-4 ml-2 md:hidden xl:flex`}
              ></span>
              <span className={`w-5/12 text-gray-500 text-xs md:mr-3 xl:mr-0`}>
                {item.desc}
              </span>
              <span
                className={`w-6/12 relative flex flex-row-reverse items-center`}
              >
                <span className={`text-gray-500 text-xs mx-2`}>
                  {item.after}
                </span>
                <span>{source[item.key]}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function WorkInfo() {
  return(<div
    className={`w-full bg-white shadow-sm bd-r-4 mb-6 ${styles["work-info"]} flex flex-col md:flex-row items-center `}
  >
    <WorkInfoLeft />
  </div>)
}

export default WorkInfo;
