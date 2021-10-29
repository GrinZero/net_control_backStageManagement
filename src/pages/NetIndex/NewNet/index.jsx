import React, { useCallback } from "react";
import { PopupMessage } from "../../../components/source-myself/Message/Message.jsx";
import { updateWorkSpaceOrder } from "./../../../actions/workspace";
import { progressTo } from "./../../../actions/workspace";
import { useSelector, useDispatch } from "react-redux";
import store from "../../../store";

const wxPng = "https://z3.ax1x.com/2021/10/17/5tnybq.png";
const zfbPng = "https://z3.ax1x.com/2021/10/17/5tnsrn.png";


function NewNetNext(){
  const dispatch = useDispatch();
  const goNext=useCallback(()=>{
    dispatch(progressTo.newNetSec)
  })
  return (
    <div
    className={`w-full h-8 j-bg-blue rounded-4 flexCenter text-white font-blod cursor-pointer -mt-4 hover:opacity-80 transition-opacity`}
    onClick={goNext}
  >
    NEXT
  </div>
  )
}

function NewNet() {
  const dispatch = useDispatch();
  const source = [
    {
      text: "支付宝账单导入",
      icon: zfbPng,
      message: (
        <div
          className={`whitespace-nowrap p-2 bg-yellow-50 rounded-md shadow-sm text-sm`}
        >
          支付宝账单文件下载地址：https://www.alipay.com/
        </div>
      ),
      fun: (e) => {
        let { files } = e.target;
        let reader = new FileReader();
        reader.onload = (item) => {
          let { result } = item.currentTarget;
          result = result.split("\n");
          result.splice(0, 3);
          result = result.map((item) => {
            let data = item.split(",");
            return {
              orderNumber: data[2],
              inMoney: +data[6],
            };
          });
          dispatch(updateWorkSpaceOrder({ data: result }));
        };
        reader.readAsText(files[0], "gbk");
      },
    },
    {
      text: "微信账单导入",
      icon: wxPng,
      message: <div>支付宝账单文件下载地址：</div>,
      fun: (e) => {
        let { files } = e.target;
        let reader = new FileReader();
        reader.onload = (item) => {
          let { result } = item.currentTarget;
          result=result.split("----------------------微信支付账单明细列表--------------------,,,,,,,,\r\n")[1]
          result = result.split("\n")
          result.splice(0,1);
          result = result.map((item) => {
            let data = item.split(",");
            return {
              orderNumber: data[8]?.replace("\t", ""),
              inMoney: (data[4] === "收入"||data[4] === "已收钱") ? +data[5].replace("¥", "") : " ",
            };
          });
          result=result.filter(item=>item.inMoney!==" ")
          dispatch(updateWorkSpaceOrder({ data: result }));
        };
        reader.readAsText(files[0], "gbk");
      },
    },
  ];
  return (
    <div className={`w-full flexCol overflow-hidden bd-r-4`}>
      {/* 导入区 */}
      <div className={`flexRow w-95% justify-around`}>
        {source.map((item) => (
          <div className={`flexCenter p-5 md:p-8`} key={item.text}>
            <label className={`flexCenter cursor-pointer`}>
              <img src={item.icon} width="45" height="auto" />
              <span className={`text-gray-400 font-semibold mt-2`}>
                {item.text}
              </span>
              <input
                type="file"
                className={`w-0 h-0`}
                onChange={(e) => item.fun?.(e)}
              ></input>
            </label>
            <PopupMessage message={item.message} direction="bottom">
              <span
                className={`fas fa-question-circle j-blue relative mt-0.5 cursor-help`}
              ></span>
            </PopupMessage>
          </div>
        ))}
      </div>
      <NewNetNext/>
    </div>
  );
}
export default NewNet;
