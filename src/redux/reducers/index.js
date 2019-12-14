import { combineReducers } from "redux";

import userReducer from "./userReducer";
import toggleReducer from "./toggleReducer";

export default combineReducers({
  usersData: userReducer,
  toggler: toggleReducer
});
