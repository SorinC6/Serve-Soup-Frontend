import { combineReducers } from "redux";
//import reducers
import { errors, loading } from "./authReducers";

export default combineReducers({
  loading,
  errors
});
