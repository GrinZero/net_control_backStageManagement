import store from "../store";
let initialState = {
    show:false
}

const navReducer = (state = initialState, action) => {
    switch (action.type) {
        case "controlNav":
            state.show=!state.show
            return {...state}
        default:
            return state;
    }
}
export default navReducer