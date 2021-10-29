import { getOrder } from "../api/base";

const orderNext = () => (dispatch) => {
  getOrder.next()
  .then(res=>{
    dispatch({
      type:"orderNext",
      payload:res
    })
  })
  .catch(e=>{
    console.log(e)
  })
};
export {
  orderNext
}