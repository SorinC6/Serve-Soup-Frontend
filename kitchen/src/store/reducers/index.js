import { combineReducers } from "redux";
//import reducers
import { register, login } from "./authReducers";
import { categoriesReducer } from "./categoryReducer";
import { items, postItem, getById } from "./inventoryReducer";

export default combineReducers({
  register,
  login,
  categoriesReducer,
  items,
  postItem,
  getById
});
