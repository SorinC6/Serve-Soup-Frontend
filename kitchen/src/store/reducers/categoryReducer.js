import * as types from "../actions/actionTypes";

const initialState = {
  cat: [],
  error: null,
  loading: false
};

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_START:
      return {
        ...state,
        loading: true
      };
    case types.GET_CATEGORY_SUCCESS:
      //console.log("reducer ", action.payload);
      return {
        ...state,
        cat: action.payload,
        loading: false,
        error: null
      };
    case types.GET_CATEGORY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
};
