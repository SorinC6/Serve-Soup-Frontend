import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axios from "axios";

export const registerUser = userData => dispatch => {
  dispatch({ type: types.REGISTER_USER_START });

  axios
    .post(url.RegisterURL, userData)
    .then(res => {
      localStorage.setItem("email", res.data.email);
      //console.log(res.data.email);
      dispatch({ type: types.REGISTER_USER_SUCCESS, payload: res.data.email });
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
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.id);
      dispatch({ type: types.LOGIN_USER_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.LOGIN_USER_FAIL, payload: err.message });
      console.log("ssss", err);
    });
};
