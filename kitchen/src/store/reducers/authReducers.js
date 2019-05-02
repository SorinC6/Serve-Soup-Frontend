import * as types from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
  username: ""
};

export const errors = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return error;
  }
};

export const loading = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER_START:
      return {
        ...state,
        loading: true
      };
    case types.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case types.LOGIN_USER_START:
      return {
        ...state,
        loading: true
      };
    case types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        username: action.username
      };
  }
};
