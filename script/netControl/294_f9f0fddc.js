"use strict";
(self["webpackChunksztunetcontrol"] = self["webpackChunksztunetcontrol"] || []).push([[294],{

/***/ 8402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Login_Login)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/pages/Login/LoginForm/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"loginButton":"_1J5BkGr4pP69IRAyCfAekR","HoverButton":"_3DlM5acRmpmL-afZq45DOo"});
;// CONCATENATED MODULE: ./src/pages/Login/images/run.svg
/* harmony default export */ const run = (__webpack_require__.p + "d8e64e710fa2d28daee2b85f483611a5.svg");
// EXTERNAL MODULE: ./src/api/base.js + 1 modules
var base = __webpack_require__(814);
// EXTERNAL MODULE: ./src/components/source-myself/Message/Message.jsx + 3 modules
var Message = __webpack_require__(6971);
// EXTERNAL MODULE: ./src/components/source-myself/Modal/Modal.jsx + 1 modules
var Modal = __webpack_require__(9420);
;// CONCATENATED MODULE: ./src/components/source-myself/Loading/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Loading_index_module = ({});
;// CONCATENATED MODULE: ./src/components/source-myself/Loading/Loading.jsx



function Loading() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, "Loading...");
}

/* harmony default export */ const Loading_Loading = (Loading);
;// CONCATENATED MODULE: ./src/pages/Login/LoginForm/index.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function setLoading() {
  Modal/* modalControl.addChild */.s.addChild( /*#__PURE__*/react.createElement(Loading_Loading, null));
}

var loginData = {};

function LoginInput(props) {
  var _useState = (0,react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      focusFlag = _useState2[0],
      setFocusFlag = _useState2[1];

  var _useState3 = (0,react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      rightFlag = _useState4[0],
      setRightFlag = _useState4[1];

  var textMap = {
    Phone: {
      icon: "fa-mobile-alt",
      match: function match(e) {
        var _e$target$value, _e$target;

        var value = (_e$target$value = e === null || e === void 0 ? void 0 : (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.value) !== null && _e$target$value !== void 0 ? _e$target$value : e;
        var pattern = /^1([0-9]){10}$/;
        if (!value) return false;
        var res = pattern.test(value);
        if (res) loginData["Phone"] = value;
        return res;
      }
    },
    Password: {
      match: function match(e) {
        var _e$target2;

        var value = (e === null || e === void 0 ? void 0 : (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.value) || e;
        if (!value) return false;
        var res = value.length >= 8;
        if (res) loginData["Password"] = value;
        return res;
      },
      icon: "fa-key"
    }
  };
  var rightFlagEle;

  switch (rightFlag) {
    case 0:
      rightFlagEle = /*#__PURE__*/react.createElement(react.Fragment, null);
      break;

    case 1:
      rightFlagEle = /*#__PURE__*/react.createElement("span", {
        className: "fa-check-circle fas j-green"
      });
      break;

    case -1:
      rightFlagEle = /*#__PURE__*/react.createElement("span", {
        className: "fa-times-circle fas j-red"
      });

    default:
      break;
  }

  return /*#__PURE__*/react.createElement("label", {
    className: "container flex flex-row j-grey-50 bg-white items-center py-1 h-12 relative md:h-14 xl:h-16"
  }, /*#__PURE__*/react.createElement("div", {
    className: "h-full w-12 flexCenter"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas ".concat(textMap[props.text].icon)
  })), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col w-full"
  }, focusFlag ? /*#__PURE__*/react.createElement("span", {
    className: "text-xs pl-1 py-1"
  }, props.text) : /*#__PURE__*/react.createElement(react.Fragment, null), /*#__PURE__*/react.createElement("input", {
    id: "logininput" + props.text,
    className: "text-black text-sm outline-none bg-transparent w-5/6",
    type: props.type,
    placeholder: focusFlag ? "" : props.text,
    onFocus: function onFocus() {
      return setFocusFlag(true);
    },
    onBlur: function onBlur() {
      setFocusFlag(false);
      var res = textMap[props.text].match(loginData[props.text]);
      if (!res) setRightFlag(-1);
    },
    onChange: function onChange(e) {
      var res = textMap[props.text].match(e);
      if (res) setRightFlag(1);else setRightFlag(0);
    }
  })), /*#__PURE__*/react.createElement("div", {
    className: "absolute right-4 h-full w-8 flexCenter"
  }, rightFlagEle));
}

function LoginButton() {
  function handlelogin(loginData) {
    if (loginData.Phone && loginData.Password) {
      setLoading();
      (0,base/* login */.x4)(loginData).then(function (res) {
        if (res) {
          window.open(window.location.href.split("#")[0] + '#/net', '_self');
          location.reload();
        } else {
          Message/* default.fail */.Z.fail("账号或密码错误");
          var passwordInput = document.getElementById("logininputPassword");
          passwordInput.value = null;
          passwordInput.focus();
          loginData.Password = null;
        }
      });
    }
  }

  return /*#__PURE__*/react.createElement("button", {
    className: "".concat(index_module.loginButton, " w-2/5 my-3 rounded-full h-6 flexCenter text-white text-xs md:h-8 md:text-base md:my-5 xl:h-10 xl:my-8 relative overflow-hidden"),
    style: {
      backgroundColor: "var(--blue--)"
    },
    onClick: function onClick() {
      handlelogin(loginData);
    }
  }, /*#__PURE__*/react.createElement("span", {
    className: "z-10"
  }, "Login"));
}

function LoginForm() {
  return /*#__PURE__*/react.createElement("div", {
    className: "bd-r-3 shadow-lg flexCon overflow-hidden w-5/6 p-4 j-bg-white"
  }, /*#__PURE__*/react.createElement("span", {
    style: {
      color: "var(--blue--)"
    },
    className: "flexRow"
  }, /*#__PURE__*/react.createElement("i", {
    className: "fas fa-address-card mr-3 "
  }), /*#__PURE__*/react.createElement("span", {
    className: "font-size-l1"
  }, "SZTU net Control")), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col md:flex-row"
  }, /*#__PURE__*/react.createElement("div", {
    className: "w-full flexCenter scale-75 transform my-1"
  }, /*#__PURE__*/react.createElement("img", {
    src: run,
    className: "flex-2 w-full"
  })), /*#__PURE__*/react.createElement("div", {
    className: "w-full flex flex-col justify-center items-center"
  }, /*#__PURE__*/react.createElement("div", {
    className: "container text-center text-xl font-light py-3 md:py-4 md:text-base xl:text-3xl lg:py-8"
  }, "Welcome Back :)"), /*#__PURE__*/react.createElement(LoginInput, {
    text: "Phone"
  }), /*#__PURE__*/react.createElement(LoginInput, {
    type: "password",
    text: "Password"
  }), /*#__PURE__*/react.createElement(LoginButton, null))));
}

/* harmony default export */ const Login_LoginForm = (LoginForm);
;// CONCATENATED MODULE: ./src/pages/Login/Login.js


;// CONCATENATED MODULE: ./src/pages/Login/Login.jsx



function Login() {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "main flexCenter w-screen h-screen"
  }, /*#__PURE__*/react.createElement(Login_LoginForm, null)));
}

/* harmony default export */ const Login_Login = (Login);

/***/ })

}]);