import * as types from "../actions/actionTypes";

const initialState = {
  error: null,
  loading: false,
  usernameRole: ""
};

// export const errors = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

export const register = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: `${action.payload} working!`
      };

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

    default:
      return state;
  }
};

export const login = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case types.LOGIN_USER_START:
      return {
        ...state,
        loading: true
      };
    case types.LOGIN_USER_SUCCESS:
      console.log("Reducer login usccess ", action.payload);
      return {
        ...state,
        loading: false,
        error: null,
        usernameRole: action.payload.role
      };

    default:
      return state;
  }
};
