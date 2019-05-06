import * as types from "../actions/actionTypes";

const initialState = {
  items: [],
  error: null,
  loading: false
};

export const items = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ITEMS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        items: action.payload
      };
    case types.GET_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
