import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axiosWithAuth from "../axios/index";
import { getAllItems, getSpecificItems } from "./actionCategory";

// export const getItems = () => dispatch => {
//   dispatch({ type: types.GET_ITEMS_START });

//   axiosWithAuth()
//     .get(url.getItems)
//     .then(res => {
//       //console.log(res.data.items);
//       dispatch({ type: types.GET_ITEMS_SUCCESS, payload: res.data.items });
//     })
//     .catch(err => {
//       dispatch({ type: types.GET_ITEMS_FAIL, payload: err.message });
//     });
// };

export const addItem = itemData => dispatch => {
  dispatch({ type: types.ADD_ITEM_START });

  console.log("Data from action ceator: ", itemData);

  axiosWithAuth()
    .post(url.postItem, itemData)
    .then(res => {
      // console.log(res.data);
      getAllItems();
      dispatch({ type: types.ADD_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.ADD_ITEM_FAIL, payload: err });
    });
};

export const getItemById = id => dispatch => {
  dispatch({ type: types.GET_CATEGORY_ID_START });

  axiosWithAuth()
    .get(`${url.getbyId}/${id}`)
    .then(res => {
      //console.log(res.data.item);
      dispatch({ type: types.GET_CATEGORY_ID_SUCCESS, payload: res.data.item });
    })
    .catch(err => {
      console.log(err.message);
    });
};

export const deleteItem = id => dispatch => {
  dispatch({ type: types.DETELE_ITEM_START });

  axiosWithAuth()
    .delete(`${url.deleteUrl}/${id}`)
    .then(res => {
      //console.log(res.data);
      dispatch({ type: types.DETELE_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.DETELE_ITEM_FAIL, payload: err.message });
      //console.log(err.message);
    });
};

export const updateItem = (id, itemData) => dispatch => {
  dispatch({ type: types.UPDATE_ITEM_START });

  axiosWithAuth()
    .put(`${url.updateURL}/${id}`, itemData)
    .then(res => {
      console.log(res.data);
      getItemById(id);
      getSpecificItems(id);
      dispatch({ type: types.UPDATE_ITEM_SUCCESS });
    })
    .catch(err => {
      dispatch({ type: types.UPDATE_ITEM_FAIL, payload: err.message });
      console.log(err);
    });
};
