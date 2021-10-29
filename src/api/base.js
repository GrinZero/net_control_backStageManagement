import { b64MD5 } from "../extension/md5";
import store from "../store";
import axios from "axios";
import XLSX from "xlsx"
const baseURL =
  "https://sztulives-20210910-5dsg4b03b2874-1307401873.ap-shanghai.app.tcloudbase.com";
const thisURL = window.location.origin;

const axiosBase = axios.create({
  baseURL,
  timeout: 3000,
  headers: {
    "X-Cloudbase-Credentials": sessionStorage.getItem("ticket"),
  },
  transformResponse: [
    function (data) {
      data = JSON.parse(data);
      switch (data.code) {
        case "INVALID_CREDENTIALS":
          window.open(thisURL + "/login", "_self");
          // console.log('data', data,sessionStorage.getItem('ticket'))
          console.error("login fail:-100");
          break;
        case 1:
          console.log("login success:1");
          break;
        default:
          console.log("data", data);
          break;
      }
      return data;
    },
  ],
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
});

async function login(loginData) {
  loginData.Password = b64MD5(loginData.Password);
  console.log(loginData)
  let res = await axiosBase.get("/login", {
    params: loginData,
  });
  if (res.data.code === 1) {
    sessionStorage.setItem("ticket", res.data.ticket);
    return true;
  } else {
    return false;
  }
}
async function progress(options) {
  let res = await axiosBase.post("/netprogress", {
    ...options,
    timeStamp:
      store.getState().workspaceReducer.startTimeStamp || new Date().getTime(),
  });
  return res;
}
async function init(options) {
  let res = await progress({
    ...options,
    name: "init",
  });
  return res;
}
async function goNewNetSrc({ data }) {
  let res = await progress({
    name: "goNewNetSrc",
    data: data,
  });
  return res;
}
async function goNewNetThird({ data }) {
  let res = await progress({
    name: "goNewNetThird",
    data: data,
  });
  return res;
}
const getOrder = (function initAllOrder() {
  let pageSize = 0;
  return {
    next: async function () {
      pageSize += 20;
      try {
        let res = await progress({
          name: "getOrder",
          pageSize:pageSize-20,
        });
        return res.data.data.map(item=>{
          delete item.owner
          item._createTime=new Date(item._createTime).format("yyyy-MM-dd hh:mm:ss")
          return item
        })
      } catch (error) {
        pageSize-=20
        return []
      }
    },
    clear() {
      pageSize = 0;
    },
  };
})();
const downloadOrder=async item=>{
  let res=await progress({
    name:"downloadOrder",
    data:item
  })
  console.log(res.data.source.data)
  downloadXlsx(res.data.source.data)
}
const downloadXlsx=(data)=>{
  console.log('data',data )
  let newData=data.map(item=>{
    return {
      "订单编号":item._id,
      "提交日期":new Date(item._createTime).format("yyyy-MM-dd hh:mm:ss"),
      "证件姓名":item.name,
      "学号":item.schoolNum,
      "身份证":item.idcard,
      "证件有效期":item.idcardTime,
      "证件地址":item.idcardAddress,
      "联系方式":item.phone,
      "参加活动(宽度/融合)":"宽度",
      "宽带套餐内容(半年/一年)":item.pack.indexOf("|")!==-1?item.pack.split("|")[1]:item.pack,
      "速率(50M/100M/200M)":item.pack.indexOf("|")!==-1?item.pack.split("|")[0]:item.pack,
      "融合号码":"",
      "总金额":item.money,
      "办网类型":item.type
    }
  })
  let last=newData.reduce((a,b)=>{
    return{
      "总金额":a['总金额']+b['总金额'],
    }
  },{
    "总金额":0
  })
  newData.push(last)
  let ws=XLSX.utils.json_to_sheet(newData)
  let wb=XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb,ws,new Date().format("yyyy-MM-dd"))
  XLSX.writeFile(wb,"联通网络宽度办理"+new Date().format("yyyy-MM-dd")+".xlsx")
}
export { login, thisURL, progress, init, goNewNetSrc, goNewNetThird, getOrder,downloadOrder,downloadXlsx };
