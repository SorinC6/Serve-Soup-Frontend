import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axiosWithAuth from "../axios/index";

export const getUserById = id => dispatch => {
  dispatch({ type: types.GET_USER_INFO_START });

  axiosWithAuth()
    .get(`${url.userInfo}/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: types.GET_USER_INFO_SUCCESS, payload: res.data });
    })
    .cahtch(err => {
      console.log(err);
      dispatch({ type: types.GET_USER_INFO_FAIL, payload: err.message });
    });
};
