import {combineReducers} from "redux";

import linkReducer from "./linkReducer";
import navReducer from "./navReducer";
import workspaceReducer from "./workspaceReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
    linkReducer,navReducer,workspaceReducer,orderReducer
});

export default rootReducer;