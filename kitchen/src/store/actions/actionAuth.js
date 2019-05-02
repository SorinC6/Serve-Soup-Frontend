import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axios from "axios";

export const registerUser = userData => dispatch => {
  dispatch({ type: types.REGISTER_USER_START });

  axios
    .post(url.RegisterURL, userData)
    .then(res => {
      console.log(res.data);
      dispatch({ type: types.REGISTER_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.REGISTER_USER_FAIL, payload: err.message });
      //console.log(err.error);
    });
};

export const loginUser = userData => dispatch => {
  dispatch({ type: types.LOGIN_USER_START });

  axios
    .post(url.LoginURL, userData)
    .then(res => {
      console.log(res.data);
      dispatch({ type: types.LOGIN_USER_START, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_USER_FAIL, payload: err.message });
      console.log(err);
    });
};
