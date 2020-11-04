const { combineReducers } = require("redux");
import loginReducer from "./loginReducer";

const appReducer = combineReducers({
    loginReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
}

export default rootReducer;