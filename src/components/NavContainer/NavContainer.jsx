import React from "react";
import "./index.module.css";
import { useSelector } from "react-redux";

function NavContainer(props) {
  const active = useSelector((state) => state.navReducer.show);
  return (
    <div
      className={`fixed right-0 top-0 w-screen h-screen overflow-y-auto overflow-x-hidden ${
        active
          ? `${"md-w-[full-3-1/6]"}`
          : "md-w-[full-3]"
      } ${"nav-container"} `}
    >
      {props.children}
    </div>
  );
}

export { NavContainer };
