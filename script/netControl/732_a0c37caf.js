"use strict";
(self["webpackChunksztunetcontrol"] = self["webpackChunksztunetcontrol"] || []).push([[732],{

/***/ 6894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ NetIndex_NetIndex)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
;// CONCATENATED MODULE: ./src/components/NavContainer/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"md-w-[full-3]":"_3CO8zcDmHddernir8C51Z2","md-w-[full-3-1/6]":"_9tQwN1abZ3v2vD6oUw7lA"});
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 18 modules
var es = __webpack_require__(9704);
;// CONCATENATED MODULE: ./src/components/NavContainer/NavContainer.jsx




function NavContainer(props) {
  var active = (0,es/* useSelector */.v9)(function (state) {
    return state.navReducer.show;
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "fixed right-0 top-0 w-screen h-screen overflow-y-auto overflow-x-hidden ".concat(active ? "md-w-[full-3-1/6]" : "md-w-[full-3]", " ", "nav-container", " ")
  }, props.children);
}


;// CONCATENATED MODULE: ./src/pages/NetIndex/WorkInfo/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const WorkInfo_index_module = ({"work-info":"_80gg0_w0ZNCNNvL_7gwqk","work-info-item":"_1Rj7WjdwMkvX2FtvDlhJSF","work-info-todomoney":"OZVMr_YfhUWD1TGdw-aQ4"});
;// CONCATENATED MODULE: ./src/pages/NetIndex/WorkInfo/index.jsx




function WorkInfoLeft() {
  var initData = (0,es/* useSelector */.v9)(function (item) {
    return item.workspaceReducer.initData;
  });
  var source = initData.data;
  var sourceList = [{
    key: "toDoNum",
    bgColor: "#5c7ceb",
    desc: "待处理单数",
    after: "单"
  }, {
    key: "todayMoney",
    bgColor: "#4cccd4",
    desc: "今日新增单金额",
    after: "元"
  }, {
    key: "todayNum",
    bgColor: "#fdab3b",
    desc: "今日新增单数",
    after: "单"
  }];
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "".concat(WorkInfo_index_module["work-info-left"], " flex-col items-center w-full md:w-1/3 h-full flex p-4")
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(WorkInfo_index_module["work-info-todomoney"], " relative text-2xl flex flex-row items-center w-full p-4 h-24 text-white shadow-lg"),
    style: {
      "--tw-shadow": "0 10px 15px -3px #637ef420, 0 8px 12px -3px #637ef450"
    }
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/react.createElement("span", {
    className: "text-xs mb-2 font-light"
  }, "\u5F85\u5904\u7406\u91D1\u989D"), /*#__PURE__*/react.createElement("div", {
    className: "yuan"
  }, source.toDoMoney))), /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col items-center w-full mt-3"
  }, sourceList.map(function (item) {
    return /*#__PURE__*/react.createElement("div", {
      className: "flex flex-row items-center py-3.5 w-full relative overflow-hidden xl:whitespace-nowrap work-info-item md:justify-center",
      key: item.key
    }, /*#__PURE__*/react.createElement("span", {
      style: {
        background: item.bgColor
      },
      className: "h-full w-2 mr-4 ml-2 md:hidden xl:flex"
    }), /*#__PURE__*/react.createElement("span", {
      className: "w-5/12 text-gray-500 text-xs md:mr-3 xl:mr-0"
    }, item.desc), /*#__PURE__*/react.createElement("span", {
      className: "w-5/12 relative flex flex-row-reverse items-center"
    }, /*#__PURE__*/react.createElement("span", {
      className: "text-gray-500 text-xs mx-2"
    }, item.after), /*#__PURE__*/react.createElement("span", null, source[item.key])));
  }))));
}

function WorkInfo() {
  return /*#__PURE__*/react.createElement("div", {
    className: "w-full bg-white shadow-sm bd-r-4 mb-6 ".concat(WorkInfo_index_module["work-info"], " flex flex-col md:flex-row items-center ")
  }, /*#__PURE__*/react.createElement(WorkInfoLeft, null));
}

/* harmony default export */ const NetIndex_WorkInfo = (WorkInfo);
;// CONCATENATED MODULE: ./src/pages/NetIndex/WorkSpace/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const WorkSpace_index_module = ({"funListItem":"_2I2YXMinl5-qBQTDE393G3"});
// EXTERNAL MODULE: ./src/api/base.js + 1 modules
var base = __webpack_require__(814);
// EXTERNAL MODULE: ./src/store/index.js + 9 modules
var store = __webpack_require__(1646);
;// CONCATENATED MODULE: ./src/actions/workspace.js



var handleWorkSpaceShow = function handleWorkSpaceShow(val) {
  return function (dispatch) {
    dispatch({
      type: "handleWorkSpaceShow",
      payload: {
        data: val
      }
    });
  };
};

var updateWorkSpaceOrder = function updateWorkSpaceOrder(_ref) {
  var data = _ref.data;
  return function (dispatch) {
    dispatch({
      type: "updateWorkSpaceOrder",
      payload: {
        data: data
      }
    });
  };
};

var initWorkAreaData = function initWorkAreaData() {
  return function (dispatch) {
    dispatch({
      type: "startInitWorkAreaData"
    });
    (0,base/* init */.S1)().then(function (res) {
      dispatch({
        type: "successInitWorkAreaData",
        payload: res.data.data
      });
    })["catch"](function (e) {
      dispatch({
        type: "failInitWorkAreaData",
        payload: e
      });
    });
  };
};

var loadMesDetail = function loadMesDetail(detail) {
  return function (dispatch) {
    dispatch({
      type: "loadMesDetail",
      payload: detail
    });
  };
};

var update_newNetSecProgress_by_index = function update_newNetSecProgress_by_index(index, rindex, data) {
  return function (dispatch) {
    dispatch({
      type: "update_newNetSecProgress_by_index",
      payload: {
        index: index,
        rindex: rindex,
        data: data
      }
    });
    return true;
  };
};

var f_progressTo = function f_progressTo(type) {
  return function (dispatch) {
    dispatch({
      type: "progressTo",
      payload: type
    });
  };
};

var f_progressTo_newNetSec = function f_progressTo_newNetSec() {
  return function (dispatch) {
    dispatch({
      type: "progressTo_newNetSec_start"
    });
    var data = store/* default.getState */.Z.getState().workspaceReducer.orderData;
    var newData = data.map(function (item) {
      return item.orderNumber + "-" + item.inMoney;
    });
    (0,base/* goNewNetSrc */._A)({
      data: newData
    }).then(function (res) {
      var orderMap = {};
      data.forEach(function (element) {
        orderMap[element.orderNumber] = +element.inMoney;
      });
      var newNetSecProgress = [{
        problem: "缴费金额与选择套餐不符合",
        data: []
      }, {
        problem: "未查询到缴费记录",
        data: []
      }, {
        problem: "正常数据",
        data: []
      }];
      res.data.newNetSecProgress.forEach(function (item) {
        var payID = item.payID.split("-")[0];

        if (orderMap[payID] !== undefined) {
          if (orderMap[payID] !== item.money) {
            item.problem = "缴费金额与选择套餐不符合";
            newNetSecProgress[0].data.push(item);
          } else {
            item.problem = "正常数据";
            newNetSecProgress[2].data.push(item);
          }
        } else {
          item.problem = "未查询到缴费记录";
          newNetSecProgress[1].data.push(item);
        }
      });
      dispatch({
        type: "updateNewNetSec",
        payload: {
          updated: res.data.progress.stats.updated,
          newNetSecProgress: newNetSecProgress
        }
      });
    });
  };
};

var f_progressTo_newNetThird = function f_progressTo_newNetThird() {
  return function (dispatch) {
    dispatch({
      type: "progressTo_newNetThird_start"
    });
    var data = store/* default.getState */.Z.getState().workspaceReducer.newNetSecProgress;
    data = data.map(function (item) {
      return item.data;
    }).flat().map(function (item) {
      return {
        _openid: item._openid,
        money: item.money,
        _id: item._id,
        pack: item.pack,
        message: item.message,
        toGo: item.toGo || "default",
        problem: item.problem,
        name: item.name
      };
    });
    console.log('data', data);
    (0,base/* goNewNetThird */.zR)({
      data: data
    }).then(function (res) {
      (0,base/* downloadXlsx */.Zd)(res.data.getNetRecord, res.data.owner);
      dispatch({
        type: "progressTo_newNetThird_finish",
        payload: res.data.getNetRecord
      });
      console.log('res', res);
    })["catch"](function (e) {
      console.log('e', e);
    });
  };
};

var progressTo = {
  newNet: f_progressTo("newNet"),
  problem: f_progressTo("problem"),
  newNetSec: f_progressTo_newNetSec(),
  newNetThird: f_progressTo_newNetThird()
};

// EXTERNAL MODULE: ./src/components/source-myself/Message/Message.jsx + 3 modules
var Message = __webpack_require__(6971);
;// CONCATENATED MODULE: ./src/pages/NetIndex/NewNet/index.jsx






var wxPng = "https://z3.ax1x.com/2021/10/17/5tnybq.png";
var zfbPng = "https://z3.ax1x.com/2021/10/17/5tnsrn.png";

function NewNetNext() {
  var dispatch = (0,es/* useDispatch */.I0)();
  var goNext = (0,react.useCallback)(function () {
    dispatch(progressTo.newNetSec);
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "w-full h-8 j-bg-blue rounded-4 flexCenter text-white font-blod cursor-pointer -mt-4 hover:opacity-80 transition-opacity",
    onClick: goNext
  }, "NEXT");
}

function NewNet() {
  var dispatch = (0,es/* useDispatch */.I0)();
  var source = [{
    text: "支付宝账单导入",
    icon: zfbPng,
    message: /*#__PURE__*/react.createElement("div", {
      className: "whitespace-nowrap p-2 bg-yellow-50 rounded-md shadow-sm text-sm"
    }, "\u652F\u4ED8\u5B9D\u8D26\u5355\u6587\u4EF6\u4E0B\u8F7D\u5730\u5740\uFF1Ahttps://www.alipay.com/"),
    fun: function fun(e) {
      var files = e.target.files;
      var reader = new FileReader();

      reader.onload = function (item) {
        var result = item.currentTarget.result;
        result = result.split("\n");
        result.splice(0, 3);
        result = result.map(function (item) {
          var data = item.split(",");
          return {
            orderNumber: data[2],
            inMoney: +data[6]
          };
        });
        dispatch(updateWorkSpaceOrder({
          data: result
        }));
      };

      reader.readAsText(files[0], "gbk");
    }
  }, {
    text: "微信账单导入",
    icon: wxPng,
    message: /*#__PURE__*/react.createElement("div", null, "\u652F\u4ED8\u5B9D\u8D26\u5355\u6587\u4EF6\u4E0B\u8F7D\u5730\u5740\uFF1A"),
    fun: function fun(e) {
      var files = e.target.files;
      var reader = new FileReader();

      reader.onload = function (item) {
        var result = item.currentTarget.result;
        var temp = result.split("交易时间,交易类型,交易对方,商品,收/支,金额(元),支付方式,当前状态,交易单号,商户单号,备注\r\n");

        if (!temp[1]) {
          temp = result.split("交易时间,交易类型,交易对方,商品,收/支,金额(元),支付方式,当前状态,交易单号,商户单号,备注");
        }

        result = temp[1];
        console.log({
          result: result
        });
        result = result.split("\n");
        result = result.map(function (item) {
          var _data$, _data$$replace;

          var data = item.split(",");
          return {
            orderNumber: (_data$ = data[8]) === null || _data$ === void 0 ? void 0 : (_data$$replace = _data$.replace(/\t/g, "")) === null || _data$$replace === void 0 ? void 0 : _data$$replace.replace(/"/g, ""),
            inMoney: data[4] === "收入" || data[4] === "已收钱" ? +data[5].replace(data[5][0], "") : " "
          };
        });
        console.log(result);
        result = result.filter(function (item) {
          return item.inMoney !== " ";
        });
        dispatch(updateWorkSpaceOrder({
          data: result
        }));
      };

      reader.readAsText(files[0], "gbk");
    }
  }];
  return /*#__PURE__*/react.createElement("div", {
    className: "w-full flexCol overflow-hidden bd-r-4"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flexRow w-95% justify-around"
  }, source.map(function (item) {
    return /*#__PURE__*/react.createElement("div", {
      className: "flexCenter py-5 md:py-8",
      key: item.text
    }, /*#__PURE__*/react.createElement("label", {
      className: "flexCenter cursor-pointer"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.icon,
      width: "45",
      height: "auto"
    }), /*#__PURE__*/react.createElement("span", {
      className: "text-gray-400 font-semibold mt-2"
    }, item.text), /*#__PURE__*/react.createElement("input", {
      type: "file",
      className: "w-0 h-0",
      onChange: function onChange(e) {
        var _item$fun;

        return (_item$fun = item.fun) === null || _item$fun === void 0 ? void 0 : _item$fun.call(item, e);
      }
    })), /*#__PURE__*/react.createElement(Message/* PopupMessage */.d, {
      message: item.message,
      direction: "bottom"
    }, /*#__PURE__*/react.createElement("span", {
      className: "fas fa-question-circle j-blue relative mt-0.5 cursor-help"
    })));
  })), /*#__PURE__*/react.createElement(NewNetNext, null));
}

/* harmony default export */ const NetIndex_NewNet = (NewNet);
;// CONCATENATED MODULE: ./src/pages/NetIndex/NewNetSec/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const NewNetSec_index_module = ({"mes-detail-control":"QzAn8VPNkFcYZeNllvB4r","testbutton":"_25U-kRsL7d12cogtQ-XvoY"});
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(3935);
;// CONCATENATED MODULE: ./src/components/Select/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const Select_index_module = ({"select":"_1sGdKBNln2R4yj0ICz9JzJ","active":"u2O8TU3HYNJvStT0ejHvc","i":"_1Y_njiathDqMP23RRePE_t","options":"_6UOwF2z4V_HTxwES1V2tt","optionsIn":"HkGNsSsTwKHVGpSkz5yUl","rangeitem":"_1pTAJLjDRE0rWqt0w5r4cQ","rangeitem-active":"_3sC3Hsd8o5qRwXCdTAtQHd"});
;// CONCATENATED MODULE: ./src/components/Select/Select.jsx
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function Select(props) {
  var _useState = (0,react.useState)(props.init),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  var _useState3 = (0,react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      active = _useState4[0],
      setActive = _useState4[1];

  var _useState5 = (0,react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      width = _useState6[0],
      setWidth = _useState6[1];

  var handleClick = (0,react.useCallback)(function (e) {
    e.stopPropagation();

    if (active) {
      setActive(false);
      document.removeEventListener("click", handleClick);
    }

    ;
  });
  var me = (0,react.useRef)();
  (0,react.useEffect)(function () {
    setWidth(me.current.clientWidth);
    document.addEventListener("click", handleClick);
    return function () {
      document.removeEventListener("click", handleClick);
    };
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "".concat(Select_index_module.select, " ").concat(active ? Select_index_module.active : ""),
    ref: me,
    style: {
      maxWidth: props.maxWidth
    },
    onClick: function onClick(e) {
      e.stopPropagation();
      setActive(!active);
    }
  }, /*#__PURE__*/react.createElement("span", null, props.range[index]), /*#__PURE__*/react.createElement("i", {
    className: "fas fa-chevron-down ".concat(Select_index_module.i)
  }), active ? /*#__PURE__*/react.createElement("div", {
    className: "".concat(Select_index_module.options)
  }, /*#__PURE__*/react.createElement("div", {
    className: "".concat(Select_index_module.optionsIn),
    style: {
      width: width
    }
  }, props.range.map(function (item, id) {
    return /*#__PURE__*/react.createElement("div", {
      className: "".concat(Select_index_module.rangeitem, " ").concat(index === id ? Select_index_module["rangeitem-active"] : ""),
      key: item,
      onClick: function onClick() {
        setIndex(id);
        props === null || props === void 0 ? void 0 : props.onChange(id);
      }
    }, item);
  }))) : /*#__PURE__*/react.createElement(react.Fragment, null));
}

/* harmony default export */ const Select_Select = (Select);
;// CONCATENATED MODULE: ./src/pages/NetIndex/NewNetSec/index.jsx
function NewNetSec_slicedToArray(arr, i) { return NewNetSec_arrayWithHoles(arr) || NewNetSec_iterableToArrayLimit(arr, i) || NewNetSec_unsupportedIterableToArray(arr, i) || NewNetSec_nonIterableRest(); }

function NewNetSec_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function NewNetSec_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NewNetSec_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NewNetSec_arrayLikeToArray(o, minLen); }

function NewNetSec_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NewNetSec_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function NewNetSec_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var keyMap = {
  payID: "订单号",
  phone: "手机号",
  name: "姓名",
  schoolNum: "学号",
  problem: "问题",
  live: "宿舍号",
  idcard: "身份证号",
  idcardAddress: "身份证地址",
  idcardTime: "身份证有效期",
  type: "类型"
};
var problemMap = {
  缴费金额与选择套餐不符合: 3,
  未查询到缴费记录: 0
};

function NewNetSecMesDetail(props) {
  return props.mesDetail.problem ? /*#__PURE__*/react.createElement("div", {
    className: "w-full flex flex-row flex-wrap select-text text-xs text-gray-400"
  }, Object.keys(props.mesDetail).map(function (item) {
    return keyMap[item] ? /*#__PURE__*/react.createElement("div", {
      key: item,
      className: "w-full md:w-1/2 flexCol mb-2 hover:text-gray-800"
    }, /*#__PURE__*/react.createElement("div", {
      className: "flex flex-row w-11/12"
    }, /*#__PURE__*/react.createElement("span", {
      className: "whitespace-nowrap"
    }, keyMap[item], "\uFF1A"), /*#__PURE__*/react.createElement("span", null, props.mesDetail[item]))) : /*#__PURE__*/react.createElement("div", {
      key: item
    });
  })) : /*#__PURE__*/react.createElement(react.Fragment, null);
}

function NewNetSec() {
  var dispatch = (0,es/* useDispatch */.I0)();
  var mesDetail = (0,es/* useSelector */.v9)(function (state) {
    return state.workspaceReducer.mesDetail;
  });
  console.log(mesDetail);

  var _useState = (0,react.useState)(0),
      _useState2 = NewNetSec_slicedToArray(_useState, 2),
      toGo = _useState2[0],
      setToGo = _useState2[1];

  var range = ["修改单号", "补充身份证信息", "退回", "完成本单"];
  var handleSubmit = (0,react.useCallback)(function (e) {
    var options = {
      money: +e.target.money.value,
      pack: e.target.pack.value,
      message: e.target.message.value,
      toGo: range[toGo]
    };
    var res = dispatch(update_newNetSecProgress_by_index(mesDetail.index, mesDetail.rindex, options));
    if (res) Message/* default.success */.Z.success("".concat(mesDetail.name, "\u540C\u5B66\u7684\u4FE1\u606F\u5DF2\u66F4\u65B0"));
  });
  var toNext = (0,react.useCallback)(function () {
    dispatch(progressTo.newNetThird);
  });
  var init = mesDetail.toGo || problemMap[mesDetail.problem];

  if (!(init instanceof Number)) {
    range.forEach(function (element, index) {
      if (element === init) init = index;
    });
  }

  return mesDetail.pack ? /*#__PURE__*/react.createElement("div", {
    className: "hidden md:flex flex-col items-center w-full h-full mb-3 select-text"
  }, /*#__PURE__*/react.createElement("form", {
    className: "w-95%",
    onSubmit: function onSubmit(e) {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit(e);
    }
  }, /*#__PURE__*/react.createElement(NewNetSecMesDetail, {
    mesDetail: mesDetail
  }), mesDetail.money ? /*#__PURE__*/react.createElement("div", {
    className: "w-95% pl-2 h-18 relative flex flex-col text-sm ".concat(NewNetSec_index_module["mes-detail-control"]),
    key: mesDetail.rindex + "-" + mesDetail.index
  }, /*#__PURE__*/react.createElement("button", {
    type: "submit",
    className: "j-bg-blue rounded-3xl w-16 h-6 flexCenter text-white text-xs absolute bottom-3 right-3 ".concat(NewNetSec_index_module.testbutton)
  }, "\u786E \u8BA4"), /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("span", null, "\u91D1\u989D"), /*#__PURE__*/react.createElement("input", {
    defaultValue: mesDetail.money,
    name: "money"
  })), /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("span", null, "\u5957\u9910"), /*#__PURE__*/react.createElement("input", {
    defaultValue: mesDetail.pack,
    name: "pack"
  })), /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("span", null, "\u63A8\u9001\u6D88\u606F"), /*#__PURE__*/react.createElement("input", {
    defaultValue: mesDetail.problem,
    name: "message"
  })), /*#__PURE__*/react.createElement("label", null, /*#__PURE__*/react.createElement("span", null, "\u7C7B\u578B"), /*#__PURE__*/react.createElement("div", {
    className: "w-36 h-6"
  }, /*#__PURE__*/react.createElement(Select_Select, {
    range: range,
    init: init,
    onChange: function onChange(e) {
      setToGo(e);
    }
  })))) : /*#__PURE__*/react.createElement(react.Fragment, null))) : /*#__PURE__*/react.createElement("div", {
    className: "w-full h-8 j-bg-blue rounded-4 flexCenter text-white font-blod cursor-pointer hover:opacity-80 transition-opacity mt-3",
    onClick: toNext
  }, "NEXT");
}

/* harmony default export */ const NetIndex_NewNetSec = (NewNetSec);
;// CONCATENATED MODULE: ./src/pages/NetIndex/WorkSpace/index.jsx







var 提示png = "https://z3.ax1x.com/2021/10/18/5tzTwd.png";
var 订单png = "https://z3.ax1x.com/2021/10/18/5tzRW6.png";
var funListIcon0 = "https://z3.ax1x.com/2021/10/16/5J4IsS.png";
var funListIcon1 = "https://z3.ax1x.com/2021/10/16/5J47ZQ.png";
var WorkThings = {
  newNet: /*#__PURE__*/react.createElement(NetIndex_NewNet, null),
  newNetSec: /*#__PURE__*/react.createElement(NetIndex_NewNetSec, null)
};

function Workspace() {
  var dispatch = (0,es/* useDispatch */.I0)();
  var running = (0,es/* useSelector */.v9)(function (state) {
    return state.workspaceReducer.running;
  });
  var progress = (0,es/* useSelector */.v9)(function (state) {
    return state.workspaceReducer.progress;
  });
  var initData = (0,es/* useSelector */.v9)(function (item) {
    return item.workspaceReducer.initData;
  });
  var funList = [{
    icon: funListIcon0,
    text: "网络办理/续费",
    fun: function fun() {
      dispatch(progressTo.newNet);
    }
  }, {
    icon: funListIcon1,
    text: "问题单处理",
    fun: function fun() {
      dispatch(progressTo.problem);
    }
  }];
  var noneStart = /*#__PURE__*/react.createElement("div", {
    className: "w-full md:h-full flex flex-row flex-wrap text-gray-300"
  }, funList.map(function (item) {
    return /*#__PURE__*/react.createElement("div", {
      className: "flexCenter shadow-sm ".concat(WorkSpace_index_module.funListItem, " hover:shadow-2xl hover:rounded-lg md:w-48 md:h-48 cursor-pointer transition-shadow"),
      onClick: function onClick() {
        var _item$fun;

        dispatch(handleWorkSpaceShow(true));
        (_item$fun = item.fun) === null || _item$fun === void 0 ? void 0 : _item$fun.call(item);
      },
      key: item.text
    }, /*#__PURE__*/react.createElement("span", {
      className: "mb-3 text-xs md:text-base"
    }, item.text), /*#__PURE__*/react.createElement("img", {
      src: item.icon,
      className: "w-8 h-8 md:w-11 md:h-11"
    }));
  }));
  var toDo = [{
    text: "待导出单数",
    num: initData.data.toExportNum,
    after: "单",
    icon: 订单png
  }, {
    text: "未验证单数",
    num: initData.data.toNoneNum,
    after: "单",
    icon: 提示png
  }];
  return /*#__PURE__*/react.createElement("div", {
    className: "w-full bg-white bd-r-4 select-none shadow-sm relative"
  }, running ? /*#__PURE__*/react.createElement("div", {
    className: "w-full h-full"
  }, /*#__PURE__*/react.createElement("div", {
    className: "w-95% mt-2 md:mt-5 h-20 rounded-lg bg-gray-100 flexRow justify-evenly items-center mb-2 md:mb-5",
    style: {
      'marginLeft': "2.5%"
    }
  }, toDo.map(function (item) {
    return /*#__PURE__*/react.createElement("div", {
      className: "flex flex-col text-gray-400 text-sm border-r-2 border-gray-300 items-center last:border-0",
      key: item.text,
      style: {
        width: "calc(".concat(1 / toDo.length * 100 + "%", ")")
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "flex-col flex"
    }, /*#__PURE__*/react.createElement("span", null, item.text, "\u25B8"), /*#__PURE__*/react.createElement("div", {
      className: "flex flex-row items-center mt-2"
    }, /*#__PURE__*/react.createElement("img", {
      src: item.icon,
      className: "w-6 h-6 bg-white rounded-full"
    }), /*#__PURE__*/react.createElement("span", null, /*#__PURE__*/react.createElement("span", {
      className: "text-black text-xl mx-3"
    }, item.num), item.after))));
  })), WorkThings[progress]) : noneStart);
}

/* harmony default export */ const WorkSpace = (Workspace);
;// CONCATENATED MODULE: ./src/pages/NetIndex/WorkMessage/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const WorkMessage_index_module = ({"message":"_1eMXCPXUbStdAyz0_jI3DZ"});
;// CONCATENATED MODULE: ./src/pages/NetIndex/NewNetMessage/index.jsx



function NewNetMessage() {
  var orderData = (0,es/* useSelector */.v9)(function (state) {
    return state.workspaceReducer.orderData;
  });
  if (orderData.length === 0) return /*#__PURE__*/react.createElement(react.Fragment, null);
  return /*#__PURE__*/react.createElement("div", {
    className: "w-full flex flex-col items-center relative mb-5"
  }, /*#__PURE__*/react.createElement("span", {
    className: "my-3 text-gray-500 font-bold"
  }, "\u25C9 \u5DF2\u5BFC\u5165\u6570\u636E"), orderData.map(function (item) {
    return /*#__PURE__*/react.createElement("div", {
      key: item.orderNumber,
      className: "flexRow w-11/12 h-6 text-gray-600 text-sm bg-gray-50 px-2 hover:shadow hover:-translate-y-1 transform transition hover:bg-gray-600 hover:text-white"
    }, /*#__PURE__*/react.createElement("span", {
      className: "text-xs w-9/12 overflow-hidden whitespace-nowrap border-r-2 border-gray-200 "
    }, item.orderNumber), /*#__PURE__*/react.createElement("span", {
      className: "ml-2 text-red-400 whitespace-nowra"
    }, "\uFFE5", item.inMoney));
  }));
}

/* harmony default export */ const NetIndex_NewNetMessage = (NewNetMessage);
;// CONCATENATED MODULE: ./src/pages/NetIndex/NewNetSecMessage/index.jsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function NewNetSecMessage_slicedToArray(arr, i) { return NewNetSecMessage_arrayWithHoles(arr) || NewNetSecMessage_iterableToArrayLimit(arr, i) || NewNetSecMessage_unsupportedIterableToArray(arr, i) || NewNetSecMessage_nonIterableRest(); }

function NewNetSecMessage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function NewNetSecMessage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NewNetSecMessage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NewNetSecMessage_arrayLikeToArray(o, minLen); }

function NewNetSecMessage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NewNetSecMessage_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function NewNetSecMessage_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





function NewNetSecMessage() {
  var newNetSecMes = (0,es/* useSelector */.v9)(function (state) {
    return state.workspaceReducer.newNetSecProgress;
  });
  var dispatch = (0,es/* useDispatch */.I0)();

  var _useState = (0,react.useState)({
    index: -1,
    rindex: -1
  }),
      _useState2 = NewNetSecMessage_slicedToArray(_useState, 2),
      activeIndex = _useState2[0],
      setActiveIndex = _useState2[1];

  var handleLoadDetail = (0,react.useCallback)(function (_ref) {
    var index = _ref.index,
        ritem = _ref.ritem,
        rindex = _ref.rindex;
    dispatch(loadMesDetail(_objectSpread(_objectSpread({}, ritem), {}, {
      index: index,
      rindex: rindex
    })));

    if (index === activeIndex.index && rindex === activeIndex.rindex) {
      setActiveIndex({
        index: -1,
        rindex: -1
      });
    } else {
      setActiveIndex({
        index: index,
        rindex: rindex
      });
    }
  });
  return /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col items-center w-full mb-3"
  }, /*#__PURE__*/react.createElement("span", {
    className: "my-3 text-gray-500 font-bold"
  }, "\u25C9 \u9A8C\u8BC1\u6570\u636E"), newNetSecMes.map(function (item, index) {
    return item.data.length > 0 ?
    /*#__PURE__*/
    // 简略信息，点击加载详细信息
    react.createElement("div", {
      key: item.problem,
      className: "flex flex-col w-11/12 text-sm"
    }, /*#__PURE__*/react.createElement("span", {
      className: "text-xs px-2 border-l-4 border-gray-500 my-2",
      style: {
        width: "fit-content"
      }
    }, item.problem), item.data.map(function (ritem, rindex) {
      return /*#__PURE__*/react.createElement("div", {
        key: ritem._id,
        onClick: function onClick() {
          handleLoadDetail({
            index: index,
            ritem: ritem,
            rindex: rindex
          });
        },
        className: "group cursor-pointer flexCol w-full bg-gray-50 rounded-md hover:shadow transition hover:bg-gray-600 hover:text-white ".concat(activeIndex.index === index && activeIndex.rindex === rindex ? "text-white bg-gray-600" : "")
      }, /*#__PURE__*/react.createElement("div", {
        className: "w-full flexRow py-1"
      }, /*#__PURE__*/react.createElement("span", {
        className: "border-gray-200 border-r-2 pl-2 pr-3 text-xs whitespace-nowrap"
      }, ritem.name), /*#__PURE__*/react.createElement("span", {
        className: "w-5/12 text-red-400 ml-3"
      }, ritem.schoolNum)), /*#__PURE__*/react.createElement("div", {
        className: "w-95% text-xs flex-col py-1 px-2 hidden group-hover:flex mb-2 bg-gray-500 text-gray-50 rounded"
      }, /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
        className: "w-11 inline-block"
      }, "\u624B\u673A\u53F7"), /*#__PURE__*/react.createElement("span", null, ritem.phone)), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
        className: "w-11 inline-block"
      }, "\u8BA2\u5355\u53F7"), /*#__PURE__*/react.createElement("span", null, ritem.payID.split("-")[0])), /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("span", {
        className: "w-11 inline-block"
      }, "\u91D1\u989D"), /*#__PURE__*/react.createElement("span", null, ritem.money))));
    })) : /*#__PURE__*/react.createElement("div", {
      key: item.problem
    });
  }));
}

/* harmony default export */ const NetIndex_NewNetSecMessage = (NewNetSecMessage);
;// CONCATENATED MODULE: ./src/actions/order.js


var orderNext = function orderNext() {
  return function (dispatch) {
    base/* getOrder.next */.co.next().then(function (res) {
      dispatch({
        type: "orderNext",
        payload: res
      });
    })["catch"](function (e) {
      console.log(e);
    });
  };
};


;// CONCATENATED MODULE: ./src/pages/NetIndex/NoneMessage/index.jsx
function NoneMessage_slicedToArray(arr, i) { return NoneMessage_arrayWithHoles(arr) || NoneMessage_iterableToArrayLimit(arr, i) || NoneMessage_unsupportedIterableToArray(arr, i) || NoneMessage_nonIterableRest(); }

function NoneMessage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function NoneMessage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NoneMessage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NoneMessage_arrayLikeToArray(o, minLen); }

function NoneMessage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NoneMessage_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function NoneMessage_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






function NoneMessage() {
  var dispatch = (0,es/* useDispatch */.I0)();
  var orders = (0,es/* useSelector */.v9)(function (store) {
    return store.orderReducer.orders;
  });

  var _useState = (0,react.useState)(false),
      _useState2 = NoneMessage_slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  (0,react.useEffect)(function () {
    dispatch(orderNext());
  }, []);
  return orders.length > 0 ? /*#__PURE__*/react.createElement("div", {
    className: "w-full py-3 flex flex-col cursor-pointer"
  }, orders.map(function (item) {
    return /*#__PURE__*/react.createElement("div", {
      className: "hover:shadow shadow-sm flex flex-col transition-shadow text-gray-300 text-xs relative",
      key: item._id,
      onClick: function onClick() {
        setLoading(true);
        (0,base/* downloadOrder */.A2)(item).then(function (res) {
          setLoading(false);
        });
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "m-3"
    }, "\u5BFC\u51FA\u65F6\u95F4\uFF1A", item._createTime), item.name ? /*#__PURE__*/react.createElement("div", {
      className: "m-3 text-gray-500"
    }, "\u63D0\u793A:", item.name) : /*#__PURE__*/react.createElement(react.Fragment, null), /*#__PURE__*/react.createElement("div", {
      className: "m-3 text-gray-500"
    }, "\u5BFC\u51FA\u5355\u6570:", item.list.length), /*#__PURE__*/react.createElement("div", {
      className: "absolute right-5 text-base bottom-5 text-blue-500"
    }, "\u4E0B\u8F7D"), loading ? /*#__PURE__*/react.createElement("div", {
      className: "absolute top-0 left-0 w-full h-full"
    }, /*#__PURE__*/react.createElement("div", {
      className: "animate-spin"
    }, "=")) : /*#__PURE__*/react.createElement(react.Fragment, null));
  })) : /*#__PURE__*/react.createElement(react.Fragment, null);
}

/* harmony default export */ const NetIndex_NoneMessage = (NoneMessage);
;// CONCATENATED MODULE: ./src/pages/NetIndex/WorkMessage/index.jsx







function WorkMessage() {
  var progress = (0,es/* useSelector */.v9)(function (state) {
    return state.workspaceReducer.progress;
  });
  var nodeMap = {
    newNet: /*#__PURE__*/react.createElement(NetIndex_NewNetMessage, null),
    newNetSec: /*#__PURE__*/react.createElement(NetIndex_NewNetSecMessage, null),
    none: /*#__PURE__*/react.createElement(NetIndex_NoneMessage, null)
  };
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
    className: "flex bg-white ".concat(WorkMessage_index_module.message, " bd-r-4 shadow-sm overflow-auto")
  }, nodeMap[progress]));
}

/* harmony default export */ const NetIndex_WorkMessage = (WorkMessage);
;// CONCATENATED MODULE: ./src/pages/NetIndex/NetIndex.js




;// CONCATENATED MODULE: ./src/pages/NetIndex/NetIndex.jsx







function NetIndex() {
  var dispatch = (0,es/* useDispatch */.I0)();
  var running = (0,es/* useSelector */.v9)(function (state) {
    return state.workspaceReducer.running;
  });
  (0,react.useEffect)(function () {
    if (!running) {
      dispatch(initWorkAreaData());
    }
  }, [running]);
  return /*#__PURE__*/react.createElement(NavContainer, null, /*#__PURE__*/react.createElement("div", {
    className: "flex flex-row w-full mt-6 md:min-h-0 md:w-nor md:ml-6"
  }, /*#__PURE__*/react.createElement("div", {
    className: "flex flex-col items-center work"
  }, /*#__PURE__*/react.createElement(NetIndex_WorkInfo, null), /*#__PURE__*/react.createElement(WorkSpace, null), /*#__PURE__*/react.createElement("div", {
    className: "block md:hidden w-full mt-5"
  }, /*#__PURE__*/react.createElement(NetIndex_WorkMessage, null))), /*#__PURE__*/react.createElement("div", {
    className: "hidden md:block"
  }, /*#__PURE__*/react.createElement(NetIndex_WorkMessage, null))), /*#__PURE__*/react.createElement("div", {
    className: "w-full h-6 block md:hidden"
  }));
}

/* harmony default export */ const NetIndex_NetIndex = (NetIndex);

/***/ })

}]);