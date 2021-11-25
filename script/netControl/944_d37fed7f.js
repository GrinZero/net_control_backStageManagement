"use strict";
(self["webpackChunksztunetcontrol"] = self["webpackChunksztunetcontrol"] || []).push([[944],{

/***/ 9944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Nav)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/Nav/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"navActive":"_2Qra7NGq1U3HsoKVzlDQuW"});
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(3727);
;// CONCATENATED MODULE: ./src/actions/nav.js
var controlNav = function controlNav() {
  return function (dispatch) {
    dispatch({
      type: "controlNav"
    });
  };
};


// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(9704);
;// CONCATENATED MODULE: ./src/components/Nav/index.jsx





var navData = [{
  text: "工作区",
  path: "/net/workspace",
  icon: "briefcase"
}, {
  text: "数据统计",
  path: "/net/datastatistics",
  icon: "chart-pie"
}, {
  text: "成员管理",
  path: "/net/members",
  icon: "users-cog"
}];

function Nav() {
  var dispatch = (0,es/* useDispatch */.I0)();
  var active = (0,es/* useSelector */.v9)(function (state) {
    return state.navReducer.show;
  });
  var navActive = /*#__PURE__*/react.createElement("div", {
    className: "w-full min-h-screen bg-gray-600 fixed left-0 top-0 flexCol md:w-1/6 animate__slideInLeft animate__fast animate__animated z-50"
  }, /*#__PURE__*/react.createElement("div", {
    className: "w-full h-3"
  }), navData.map(function (item, index) {
    return /*#__PURE__*/react.createElement(react_router_dom/* NavLink */.OL, {
      to: item.path,
      key: item.text,
      style: {
        "--animate-delay": index * 0.2 + "s"
      },
      className: "text-yellow-50 w-full flexCenter flexRow h-9 shadow md:shadow-sm py-0.5 navLink animate__flipInX animate__faster animate__animated animate__delay-1s"
    }, /*#__PURE__*/react.createElement("span", {
      className: "fas fa-".concat(item.icon, " mx-2")
    }), /*#__PURE__*/react.createElement("span", null, item.text));
  }), /*#__PURE__*/react.createElement("div", {
    className: "hidden md:flex absolute -right-1.5 bg-gray-300 opacity-75 h-screen w-3 z-10 cursor-pointer flex-col justify-center items-center",
    onClick: function onClick() {
      dispatch(controlNav());
    }
  }, /*#__PURE__*/react.createElement("span", {
    className: "fas fa-chevron-left text-gray-500 text-xs"
  })));
  var navNoneActive = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "hidden fixed left-0 h-screen w-3 cursor-pointer bg-gray-600 md:flex flex-col justify-center items-center  z-50",
    onClick: function onClick() {
      dispatch(controlNav());
    }
  }, /*#__PURE__*/react.createElement("span", {
    className: "fas fa-chevron-right text-gray-50 text-xs"
  })));
  return /*#__PURE__*/react.createElement(react.Fragment, null, active ? navActive : navNoneActive, /*#__PURE__*/react.createElement("div", {
    className: "fixed rounded-full w-10 h-10 flex flex-col justify-center items-center bg-gray-500 right-5 bottom-8 z-50 md:hidden shadow-md",
    onClick: function onClick() {
      dispatch(controlNav());
    }
  }, /*#__PURE__*/react.createElement("span", {
    className: "fas fa-bars text-white"
  })));
}

/* harmony default export */ const components_Nav = (Nav);

/***/ })

}]);