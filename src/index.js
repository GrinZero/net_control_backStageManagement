import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Redirect } from "react-router-dom";
import "@babel/polyfill";
import "./tailwind.css";
import "animate.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./source-public.css";
import store from "./store";
import { Provider } from "react-redux";
Date.prototype.format = function (format) {
  var o = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S": this.getMilliseconds()
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "")
      .substr(4 - RegExp.$1.length));
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] :
        ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return format;
}

const Nav = React.lazy(async () => import("./components/Nav/index.jsx"));
const NetIndex = React.lazy(async () => import("./pages/NetIndex/NetIndex.jsx"));
const Login = React.lazy(async () => import("./pages/Login/Login.jsx"));

function ToLogin() {
  return (
    <div>
      <Redirect to="/login" />
    </div>
  );
}   

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" exact component={ToLogin}/>
          <Route path="/net" component={Nav} />
          <Route path="/net" component={NetIndex} />
          <Route path="/login" component={Login} />
          {/* <Switch>
          <Route exact path="/main/clients/table" component={Login} />
        </Switch> */}
        </Suspense>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
