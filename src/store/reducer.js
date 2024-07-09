import { combineReducers } from "redux";
import bugReducer from "./bugs/reducer";
import userReducer from "./users/reducer"

export default combineReducers({
    bugs: bugReducer,
    users: userReducer
})