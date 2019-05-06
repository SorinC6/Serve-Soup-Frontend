import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axiosWithAuth from "../axios/index";

export const getCategories = () => dispatch => {
  dispatch({ type: types.GET_CATEGORY_START });

  axiosWithAuth()
    .get(url.getCategories)
    .then(res => {
      //console.log(res.data.categories);
      res.data.categories.push({ id: "-1", name: "Show All" });

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

export const getAllItems = () => dispatch => {
  dispatch({ type: types.GET_ALL_CATEGORY_START });

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
};

export const getSpecificItems = id => dispatch => {
  dispatch({ type: types.GET_CATEGORY_ID_START });

  axiosWithAuth()
    .get(`https://kitchen-soup-backend.herokuapp.com/api/categories/${id}`)
    .then(res => {
      console.log(res.data.items);
      dispatch({
        type: types.GET_CATEGORY_ID_SUCCESS,
        payload: res.data.items
      });
    })
    .catch(err => {
      dispatch({ type: types.GET_CATEGORY_ID_FAIL, payload: err.message });
    });
};
