import React, { useState } from "react";
import styles from "./index.module.css";
import runSvg from "../images/run.svg";
import { login } from "../../../api/base";
import Message from '../../../components/source-myself/Message/Message.jsx';
import { modalControl } from "../../../components/source-myself/Modal/Modal.jsx";
import Loading from "../../../components/source-myself/Loading/Loading.jsx";

function setLoading(){
  modalControl.addChild(
    <Loading/>
  )  
}

const loginData = {};
function LoginInput(props) {
  const [focusFlag, setFocusFlag] = useState(false);
  const [rightFlag, setRightFlag] = useState(0);
  const textMap = {
    Phone: {
      icon: "fa-mobile-alt",
      match: (e) => {
        let value = e?.target?.value ?? e;
        let pattern = /^1([0-9]){10}$/;
        if (!value) return false;
        let res = pattern.test(value);
        if (res) loginData["Phone"] = value;
        return res;
      },
    },
    Password: {
      match: (e) => {
        let value = e?.target?.value || e;
        if (!value) return false;
        let res = value.length >= 8;
        if (res) loginData["Password"] = value;
        return res;
      },
      icon: "fa-key"
    },
  };
  let rightFlagEle;
  switch (rightFlag) {
    case 0:
      rightFlagEle = <></>;
      break;
    case 1:
      rightFlagEle = <span className={`fa-check-circle fas j-green`}></span>;
      break;
    case -1:
      rightFlagEle = <span className={`fa-times-circle fas j-red`}></span>;
    default:
      break;
  }
  return (
    <label
      className={`container flex flex-row j-grey-50 bg-white items-center py-1 h-12 relative md:h-14 xl:h-16`}
    >
      <div className={`h-full w-12 flexCenter`}>
        <i className={`fas ${textMap[props.text].icon}`}></i>
      </div>
      <div className={`flex flex-col w-full`}>
        {focusFlag ? (
          <span className={`text-xs pl-1 py-1`}>{props.text}</span>
        ) : (
          <></>
        )}
        <input
          id={"logininput"+props.text}
          className={`text-black text-sm outline-none bg-transparent w-5/6`}
          type={props.type}
          placeholder={focusFlag ? "" : props.text}
          onFocus={() => setFocusFlag(true)}
          onBlur={() => {
            setFocusFlag(false);
            let res = textMap[props.text].match(loginData[props.text]);
            if (!res) setRightFlag(-1);
          }}
          onChange={(e) => {
            let res = textMap[props.text].match(e);
            if (res) setRightFlag(1);
            else setRightFlag(0);
          }}
        ></input>
      </div>
      <div className={`absolute right-4 h-full w-8 flexCenter`}>
        {rightFlagEle}
      </div>
    </label>
  );
}

function LoginButton() {
  function handlelogin(loginData) {
    if (loginData.Phone && loginData.Password) {
      setLoading()
      login(loginData)
      .then(res=>{
        if(res){
          window.open(window.location.href.split("#")[0]+'#/net','_self')
          location.reload()
        }else{
          Message.fail("账号或密码错误")
          let passwordInput=document.getElementById("logininputPassword")
          passwordInput.value=null
          passwordInput.focus()
          loginData.Password=null;
        }
      })
    }
  }
  return (
    <button
      className={`${styles["loginButton"]} w-2/5 my-3 rounded-full h-6 flexCenter text-white text-xs md:h-8 md:text-base md:my-5 xl:h-10 xl:my-8 relative overflow-hidden`}
      style={{ backgroundColor: "var(--blue--)" }}
      onClick={() => {
        handlelogin(loginData);
      }}
    >
      <span className={`z-10`}>Login</span>
    </button>
  );
}

function LoginForm() {
  return (
    <div
      className={`bd-r-3 shadow-lg flexCon overflow-hidden w-5/6 p-4 j-bg-white`}
    >
      <span style={{ color: "var(--blue--)" }} className="flexRow">
        <i className="fas fa-address-card mr-3 "></i>
        <span className="font-size-l1">SZTU net Control</span>
      </span>
      <div className={`flex flex-col md:flex-row`}>
        <div className={`w-full flexCenter scale-75 transform my-1`}>
          <img src={runSvg} className={`flex-2 w-full`}></img>
        </div>
        <div className={`w-full flex flex-col justify-center items-center`}>
          <div
            className={`container text-center text-xl font-light py-3 md:py-4 md:text-base xl:text-3xl lg:py-8`}
          >
            Welcome Back :)
          </div>
          <LoginInput text={"Phone"} />
          <LoginInput type={"password"} text={"Password"} />
          <LoginButton />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
