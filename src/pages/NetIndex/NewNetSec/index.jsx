import React, { useCallback, useState } from "react";
import styles from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  update_newNetSecProgress_by_index,
  progressTo,
} from "../../../actions/workspace";
import Select from "../../../components/Select/Select.jsx";
import Message from "../../../components/source-myself/Message/Message.jsx";

const keyMap = {
  payID: "订单号",
  phone: "手机号",
  name: "姓名",
  schoolNum: "学号",
  problem: "问题",
  live: "宿舍号",
  idcard: "身份证号",
  idcardAddress: "身份证地址",
  idcardTime: "身份证有效期",
  type: "类型",
};
const problemMap = {
  缴费金额与选择套餐不符合: 3,
  未查询到缴费记录: 0,
};

function NewNetSecMesDetail(props) {
  return props.mesDetail.problem ? (
    <div
      className={`w-full flex flex-row flex-wrap select-text text-xs text-gray-400`}
    >
      {Object.keys(props.mesDetail).map((item) =>
        keyMap[item] ? (
          <div
            key={item}
            className={`w-full md:w-1/2 flexCol mb-2 hover:text-gray-800`}
          >
            <div className={`flex flex-row w-11/12`}>
              <span className={`whitespace-nowrap`}>{keyMap[item]}：</span>
              <span>{props.mesDetail[item]}</span>
            </div>
          </div>
        ) : (
          <div key={item}></div>
        )
      )}
    </div>
  ) : (
    <></>
  );
}

function NewNetSec() {
  const dispatch = useDispatch();
  const mesDetail = useSelector((state) => state.workspaceReducer.mesDetail);
  console.log(mesDetail)
  const [toGo, setToGo] = useState(0);
  let range = ["修改单号", "补充身份证信息", "退回", "完成本单"];
  const handleSubmit = useCallback((e) => {
    let options = {
      money: +e.target.money.value,
      pack: e.target.pack.value,
      message: e.target.message.value,
      toGo: range[toGo],
    };
    let res = dispatch(
      update_newNetSecProgress_by_index(
        mesDetail.index,
        mesDetail.rindex,
        options
      )
    );
    if (res) Message.success(`${mesDetail.name}同学的信息已更新`);
  });
  const toNext = useCallback(() => {
    dispatch(progressTo.newNetThird);
  });
  let init = mesDetail.toGo || problemMap[mesDetail.problem];
  if (!(init instanceof Number)) {
    range.forEach((element, index) => {
      if (element === init) init = index;
    });
  }
  return mesDetail.pack ? (
    <div
      className={`hidden md:flex flex-col items-center w-full h-full mb-3 select-text`}
    >
      <form
        className={`w-95%`}
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleSubmit(e);
        }}
      >
        <NewNetSecMesDetail mesDetail={mesDetail} />
        {mesDetail.money ? (
          <div
            className={`w-95% pl-2 h-18 relative flex flex-col text-sm ${styles["mes-detail-control"]}`}
            key={mesDetail.rindex+"-"+mesDetail.index}
          >
            <button
              type="submit"
              className={`j-bg-blue rounded-3xl w-16 h-6 flexCenter text-white text-xs absolute bottom-3 right-3 ${styles["testbutton"]}`}
            >
              确 认
            </button>
            <label>
              <span>金额</span>
              <input defaultValue={mesDetail.money} name="money"></input>
            </label>
            <label>
              <span>套餐</span>
              <input defaultValue={mesDetail.pack} name="pack"></input>
            </label>
            <label>
              <span>推送消息</span>
              <input defaultValue={mesDetail.problem} name="message"></input>
            </label>
            <label>
              <span>类型</span>
              <div className={`w-36 h-6`}>
                <Select
                  range={range}
                  init={init}
                  onChange={(e) => {
                    setToGo(e);
                  }}
                ></Select>
              </div>
            </label>
          </div>
        ) : (
          <></>
        )}
      </form>
    </div>
  ) : (
    <div
      className={`w-full h-8 j-bg-blue rounded-4 flexCenter text-white font-blod cursor-pointer hover:opacity-80 transition-opacity mt-3`}
      onClick={toNext}
    >
      NEXT
    </div>
  );
}

export default NewNetSec;
