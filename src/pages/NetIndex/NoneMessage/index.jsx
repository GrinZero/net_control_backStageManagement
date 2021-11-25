import React, { useCallback, useEffect, useState } from "react";
import { orderNext } from "../../../actions/order";
import { useDispatch, useSelector } from "react-redux";
import { downloadOrder } from "../../../api/base";

function NoneMessage() {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.orderReducer.orders);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    dispatch(orderNext());
  }, []);
  return (
    orders.length>0?
    <div className={`w-full py-3 flex flex-col cursor-pointer`}>
      {orders.map((item) => (
        <div
          className={`hover:shadow shadow-sm flex flex-col transition-shadow text-gray-300 text-xs relative`}
          key={item._id}
          onClick={() => {
            setLoading(true);
            downloadOrder(item).then((res) => {
              setLoading(false);
            });
          }}
        >
          <div className={`m-3`}>导出时间：{item._createTime}</div>
          {
            item.name?<div className={`m-3 text-gray-500`}>提示:{item.name}</div>:<></>
          }
          <div className={`m-3 text-gray-500`}>导出单数:{item.list.length}</div>
          <div className={`absolute right-5 text-base bottom-5 text-blue-500`}>
            下载
          </div>
          {loading ? (
            <div className={`absolute top-0 left-0 w-full h-full`}>
              <div className={`animate-spin`}>=</div>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>:<></>
  );
}

export default NoneMessage;
