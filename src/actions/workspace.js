import {init,goNewNetSrc,goNewNetThird,downloadXlsx} from "../api/base";
import store from "../store";
const handleWorkSpaceShow = (val) => (dispatch) => {
  dispatch({
    type: "handleWorkSpaceShow",
    payload:{
      data:val
    }
  })
};
const updateWorkSpaceOrder=({data})=>dispatch=>{
  dispatch({
    type:"updateWorkSpaceOrder",
    payload:{data}
  })
}
const initWorkAreaData=()=>dispatch=>{
  dispatch({
    type:"startInitWorkAreaData"
  })
  init()
  .then(res=>{
    dispatch({
      type:"successInitWorkAreaData",
      payload:res.data.data
    })
  })
  .catch(e=>{
    dispatch({
      type:"failInitWorkAreaData",
      payload:e
    })
  })
}

const loadMesDetail=(detail)=>dispatch=>{
  dispatch({
    type:"loadMesDetail",
    payload:detail
  })
}
const update_newNetSecProgress_by_index=(index,rindex,data)=>dispatch=>{
  dispatch({
    type:"update_newNetSecProgress_by_index",
    payload:{index,rindex,data}
  })
  return true
}


const f_progressTo=(type)=>dispatch=>{
  dispatch({
    type:"progressTo",
    payload:type
  })
}
const f_progressTo_newNetSec=()=>dispatch=>{
  dispatch({
    type:"progressTo_newNetSec_start"
  })
  let data=store.getState().workspaceReducer.orderData;
  let newData=data.map(item=>item.orderNumber+"-"+item.inMoney)
  goNewNetSrc({
    data:newData
  })
  .then(res=>{
    let orderMap={}
    data.forEach(element => {
      orderMap[element.orderNumber]=+element.inMoney
    })
    let newNetSecProgress=[{
      problem:"缴费金额与选择套餐不符合",
      data:[]
    },{
      problem:"未查询到缴费记录",
      data:[]
    },{
      problem:"正常数据",
      data:[]
    }]
    res.data.newNetSecProgress.forEach(item=>{
      let payID=item.payID.split("-")[0]
      if (orderMap[payID]!==undefined) {
        if (orderMap[payID]!==item.money) {
          item.problem="缴费金额与选择套餐不符合"
          newNetSecProgress[0].data.push(item)
        }else{
          item.problem="正常数据"
          newNetSecProgress[2].data.push(item)
        }
      }else{
        item.problem="未查询到缴费记录"
        newNetSecProgress[1].data.push(item)
      }
    })
    dispatch({
      type:"updateNewNetSec",
      payload:{
        updated:res.data.progress.stats.updated,
        newNetSecProgress:newNetSecProgress
      }
    })
  })
}



const f_progressTo_newNetThird=()=>dispatch=>{
  dispatch({
    type:"progressTo_newNetThird_start"
  })
  let data=store.getState().workspaceReducer.newNetSecProgress;
  data=data.map(item=>item.data)
  .flat()
  .map(item=>{
    return {
      _openid:item._openid,
      money:item.money,
      _id:item._id,
      pack:item.pack,
      message:item.message,
      toGo:item.toGo||"default",
      problem:item.problem,
      name:item.name
    }
  })
  console.log('data',data )
  goNewNetThird({data})
  .then(res=>{
    downloadXlsx(res.data.getNetRecord,res.data.owner)
    dispatch({
      type:"progressTo_newNetThird_finish",
      payload:res.data.getNetRecord
    })
    console.log('res',res )
  })
  .catch(e=>{
    console.log('e',e )
  })
}


const progressTo={
  newNet:f_progressTo("newNet"),
  problem:f_progressTo("problem"),
  newNetSec:f_progressTo_newNetSec(),
  newNetThird:f_progressTo_newNetThird()
}


export {
  handleWorkSpaceShow,updateWorkSpaceOrder,initWorkAreaData,progressTo,loadMesDetail,update_newNetSecProgress_by_index
}