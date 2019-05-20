import * as types from "../actions/actionTypes";

const initialState = {
  userInfo: [],
  error: null,
  loading: true
};

export const userInfo = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_INFO_START:
      return {
        ...state,
        loading: true,
        error: ""
      };
    case types.GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        userInfo: action.payload
      };
    case types.GET_USER_INFO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
