import React, { useState } from "react";
import "./index.module.css";
import { NavLink } from "react-router-dom";
import { controlNav } from "../../actions/nav";
import { useDispatch, useSelector } from "react-redux";

const navData = [
  {
    text: "工作区",
    path: "/net/workspace",
    icon: "briefcase",
  },
  {
    text: "数据统计",
    path: "/net/datastatistics",
    icon: "chart-pie",
  },
  {
    text: "成员管理",
    path: "/net/members",
    icon: "users-cog",
  },
];
function Nav() {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.navReducer.show);
  let navActive = (
    <div
      className={`w-full min-h-screen bg-gray-600 fixed left-0 top-0 flexCol md:w-1/6 animate__slideInLeft animate__fast animate__animated z-50`}
    >
      <div className={`w-full h-3`}></div>
      {navData.map((item, index) => {
        return (
          <NavLink
            to={item.path}
            key={item.text}
            style={{ "--animate-delay": index * 0.2 + "s" }}
            className={`text-yellow-50 w-full flexCenter flexRow h-9 shadow md:shadow-sm py-0.5 navLink animate__flipInX animate__faster animate__animated animate__delay-1s`}
          >
            <span className={`fas fa-${item.icon} mx-2`}></span>
            <span>{item.text}</span>
          </NavLink>
        );
      })}
      <div
        className={`hidden md:flex absolute -right-1.5 bg-gray-300 opacity-75 h-screen w-3 z-10 cursor-pointer flex-col justify-center items-center`}
        onClick={() => {
          dispatch(controlNav());
        }}
      >
        <span className={`fas fa-chevron-left text-gray-500 text-xs`}></span>
      </div>
    </div>
  );
  let navNoneActive = (
    <>
      {/* 这里是PC的显隐控制 */}
      <div
        className={`hidden fixed left-0 h-screen w-3 cursor-pointer bg-gray-600 md:flex flex-col justify-center items-center  z-50`}
        onClick={() => {
          dispatch(controlNav());
        }}
      >
        <span className={`fas fa-chevron-right text-gray-50 text-xs`}></span>
      </div>
    </>
  );
  return (
    <>
      {active ? navActive : navNoneActive}
      {/* 这里是手机的显隐控制 */}
      <div
        className={`fixed rounded-full w-10 h-10 flex flex-col justify-center items-center bg-gray-500 right-5 bottom-8 z-50 md:hidden shadow-md`}
        onClick={() => {
          dispatch(controlNav());
        }}
      >
        <span className={`fas fa-bars text-white`}></span>
      </div>
    </>
  );
}

export default Nav;
