import { combineReducers } from "redux";
//import reducers
import { register, login } from "./authReducers";

export default combineReducers({
  register,
  login
});
