import { combineReducers } from "redux";
//import reducers
import { register, login } from "./authReducers";
import { categoriesReducer } from "./categoryReducer";

export default combineReducers({
  register,
  login,
  categoriesReducer
});
