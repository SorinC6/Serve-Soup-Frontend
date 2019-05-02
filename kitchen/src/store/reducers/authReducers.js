import * as types from "../actions/actionTypes";

export const errors = (error = null, action) => {
  switch (action.tyle) {
    case types.REGISTER_USER_FAIL:
      return action.payload;
    case types.LOGIN_USER_FAIL;
  }
};
