import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axiosWithAuth from "../axios/index";

export const search = text => dispatch => {
  //console.log(text);
  if (text.length > 0) {
    dispatch({
      type: types.SEARCH_ITEM,
      payload: text
    });
  } else {
    axiosWithAuth()
      .get(url.getItems)
      .then(res => {
        //console.log(res.data.items);
        dispatch({
          type: types.GET_ALL_CATEGORY_SUCCESS,
          payload: res.data.items
        });
      })
      .catch(err => {
        dispatch({ type: types.GET_ALL_CATEGORY_FAIL, payload: err.message });
      });
  }
};
