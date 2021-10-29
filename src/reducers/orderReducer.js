let initialState = {
    orders:[]
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case "orderNext":
            state.orders=[...state.orders,...action.payload]
            return state
        default:
            return state;
    }
}
export default orderReducer