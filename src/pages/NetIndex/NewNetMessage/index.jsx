import React from "react";
import { useSelector, useDispatch } from "react-redux";

function NewNetMessage() {
  const orderData = useSelector((state) => state.workspaceReducer.orderData);
  if (orderData.length===0) return <></>
  return (
    <div className={`w-full flex flex-col items-center relative mb-5`}>
      <span className={`my-3 text-gray-500 font-bold`}>◉ 已导入数据</span>
      {orderData.map((item) => (
        <div
          key={item.orderNumber}
          className={`flexRow w-11/12 h-6 text-gray-600 text-sm bg-gray-50 px-2 hover:shadow hover:-translate-y-1 transform transition hover:bg-gray-600 hover:text-white`}
        >
          <span
            className={`text-xs w-9/12 overflow-hidden whitespace-nowrap border-r-2 border-gray-200 `}
          >
            {item.orderNumber}
          </span>
          <span className={`ml-2 text-red-400 whitespace-nowra`}>
            ￥{item.inMoney}
          </span>
        </div>
      ))}
    </div>
  );
}

export default NewNetMessage;
