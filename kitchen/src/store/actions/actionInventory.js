import * as types from "./actionTypes";
import * as url from "../../constants/ApiConstants";
import axiosWithAuth from "../axios/index";
import { getAllItems } from "./actionCategory";

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
      console.log(res.data);
      getAllItems();
      dispatch({ type: types.ADD_ITEM_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: types.ADD_ITEM_FAIL, payload: err });
    });
};
