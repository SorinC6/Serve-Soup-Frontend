import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axiosWithAuth from "../axios/index";

export const search = text => dispatch => {
  console.log(text);
  if (text.length > 0) {
    dispatch({
      type: types.SEARCH_ITEM,
      payload: text
    });
  }
};
