import * as types from "../actions/actionTypes";

const initialState = {
  kitchenData: [],
  error: null,
  loading: true
};

export const allKitchen = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_SOUP_KITCHENS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_SOUP_KITCHENS_SUCCESS:
      return {
        ...state,
        loading: false,
        kitchenData: action.payload
      };
    default:
      return state;
  }
};
