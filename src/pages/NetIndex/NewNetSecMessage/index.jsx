import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMesDetail } from "../../../actions/workspace";

function NewNetSecMessage() {
  const newNetSecMes = useSelector(
    (state) => state.workspaceReducer.newNetSecProgress
  );
  const dispatch = useDispatch();
  const [activeIndex, setActiveIndex] = useState({
    index: -1,
    rindex: -1,
  });
  const handleLoadDetail = useCallback(({ index, ritem, rindex }) => {
    dispatch(
      loadMesDetail({
        ...ritem,
        index,
        rindex,
      })
    );
    if (index===activeIndex.index&&rindex===activeIndex.rindex){
      setActiveIndex({
        index: -1,
        rindex: -1,
      })
    }else{
      setActiveIndex({index,rindex})
    }
  });
  return (
    <div className={`flex flex-col items-center w-full mb-3`}>
      <span className={`my-3 text-gray-500 font-bold`}>◉ 验证数据</span>
      {/* 第一层，用来区分多种类型的问题 */}
      {newNetSecMes.map((item, index) =>
        item.data.length > 0 ? (
          // 简略信息，点击加载详细信息
          <div key={item.problem} className={`flex flex-col w-11/12 text-sm`}>
            <span
              className={`text-xs px-2 border-l-4 border-gray-500 my-2`}
              style={{ width: "fit-content" }}
            >
              {item.problem}
            </span>
            {item.data.map((ritem, rindex) => (
              <div
                key={ritem._id}
                onClick={() => {
                  handleLoadDetail({ index, ritem, rindex });
                }}
                className={`group cursor-pointer flexCol w-full bg-gray-50 rounded-md hover:shadow transition hover:bg-gray-600 hover:text-white ${
                  activeIndex.index === index && activeIndex.rindex === rindex
                    ? "text-white bg-gray-600"
                    : ""
                }`}
              >
                <div className={`w-full flexRow py-1`}>
                  <span
                    className={`border-gray-200 border-r-2 pl-2 pr-3 text-xs whitespace-nowrap`}
                  >
                    {ritem.name}
                  </span>
                  <span className={`w-5/12 text-red-400 ml-3`}>
                    {ritem.schoolNum}
                  </span>
                </div>
                <div
                  className={`w-95% text-xs flex-col py-1 px-2 hidden group-hover:flex mb-2 bg-gray-500 text-gray-50 rounded`}
                >
                  <div>
                    <span className={`w-11 inline-block`}>手机号</span>
                    <span>{ritem.phone}</span>
                  </div>
                  <div>
                    <span className={`w-11 inline-block`}>订单号</span>
                    <span>{ritem.payID.split("-")[0]}</span>
                  </div>
                  <div>
                    <span className={`w-11 inline-block`}>金额</span>
                    <span>{ritem.money}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div key={item.problem}></div>
        )
      )}
    </div>
  );
}

export default NewNetSecMessage;
