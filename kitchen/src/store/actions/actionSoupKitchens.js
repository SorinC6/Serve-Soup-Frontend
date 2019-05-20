import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axiosWithAuth from "../axios/index";

export const getAllSoupKitchens = () => dispatch => {
  dispatch({ type: types.GET_SOUP_KITCHENS_START });

  axiosWithAuth()
    .get(`${url.soupKitcheks}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: types.GET_SOUP_KITCHENS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.message);
      dispatch({ type: types.GET_SOUP_KITCHENS_FAIL, payload: err.message });
    });
};
