import * as types from "../actions/actionTypes";

const initialState = {
  cat: [],
  error: null,
  loading: false,
  items: [],
  searchItem: "",
  searching: false
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
    case types.GET_ALL_CATEGORY_START:
      return {
        ...state,
        error: null,
        loading: true
      };
    case types.GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        items: action.payload,
        error: null,
        loading: false
      };
    case types.GET_ALL_CATEGORY_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case types.GET_CATEGORY_ID_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_CATEGORY_ID_SUCCESS:
      return {
        ...state,
        items: action.payload,
        loading: false,
        error: null
      };
    case types.SEARCH_ITEM:
      return {
        ...state,
        searching: true,
        items: state.items.filter(
          itm =>
            itm.name.toUpperCase().indexOf(action.payload.toUpperCase()) > -1
        )
      };

    default:
      return state;
  }
};
