import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axiosWithAuth from "../axios/index";

export const getCategories = () => dispatch => {
  dispatch({ type: types.GET_CATEGORY_START });

  axiosWithAuth()
    .get(url.getCategories)
    .then(res => {
      //console.log(res.data.categories);
      dispatch({
        type: types.GET_CATEGORY_SUCCESS,
        payload: res.data.categories
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: types.GET_CATEGORY_FAIL, payload: err.message });
    });
};
