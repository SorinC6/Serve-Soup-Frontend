import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axiosWithAuth from "../axios/index";

export const getItems = () => dispatch => {
  dispatch({ type: types.GET_ITEMS_START });

  axiosWithAuth()
    .get(url.getItems)
    .then(res => {
      //console.log(res.data.items);
      dispatch({ type: types.GET_ITEMS_SUCCESS, payload: res.data.items });
    })
    .catch(err => {
      dispatch({ type: types.GET_ITEMS_FAIL, payload: err.message });
    });
};
