let initialState = {
  running: false,
  startTimeStamp: 0,
  progress: "none",
  orderData: [],
  initData: {
    loading: null,
    data: {},
  },
  newNetSecProgress: [],
  mesDetail: {},
  exportData: [
  ],
};

const workspaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case "loadMesDetail":
      if (JSON.stringify(state.mesDetail) === JSON.stringify(action.payload)) {
        state.mesDetail = {};
      } else {
        state.mesDetail = { ...action.payload };
      }
      return { ...state };
    case "handleWorkSpaceShow":
      state.running = action.payload.data;
      state.startTimeStamp = new Date().getTime();
      return { ...state };
    case "updateWorkSpaceOrder":
      let newData = action.payload.data.filter((item) => {
        if (item.inMoney && item.orderNumber) {
          if (item?.orderNumber?.indexOf("|") === -1) {
            return true;
          } else return false;
        } else {
          return false;
        }
      });
      state.orderData = [...state.orderData, ...newData];
      return { ...state };
    case "startInitWorkAreaData":
      state.initData = {
        progress: "start",
        data: {},
      };
      return { ...state };
    case "successInitWorkAreaData":
      state.initData = {
        progress: "success",
        data: action.payload,
      };
      return { ...state };
    case "progressTo":
      state.progress = action.payload;
      return { ...state };
    case "updateNewNetSec":
      state.initData.data.toExportNum += action.payload.updated;
      state.initData.data.toNoneNum -= action.payload.updated;
      state.progress = "newNetSec";
      state.newNetSecProgress = action.payload.newNetSecProgress;
      state.initData = { ...state.initData };
      return state;
    case "update_newNetSecProgress_by_index":
      let { index, rindex, data } = action.payload;
      let toDo = state.newNetSecProgress[index].data[rindex];
      console.log(toDo, "toDO", data);
      state.newNetSecProgress[index].data[rindex] = { ...toDo, ...data };
      return { ...state };
    case "progressTo_newNetThird_finish":
      state.progress = "finish";
      setTimeout(() => {
        state.running = false;
        state.progress = "none";
      }, 5000);
      state.exportData = [...action.payload];
      return { ...state };
    default:
      return { ...state };
  }
};
export default workspaceReducer;
