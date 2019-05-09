import * as types from "../actions/actionTypes";

const initialState = {
  items: [],
  error: null,
  loading: false,
  item: []
};

export const getById = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_CATEGORY_ID_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.GET_CATEGORY_ID_SUCCESS:
      return {
        ...state,
        item: action.payload,
        loading: false
      };
    case types.GET_CATEGORY_ID_FAIL:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
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

export const postItem = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.ADD_ITEM_SUCCESS:
      console.log("Reducer, ", action.payload);
      return {
        ...state,
        loading: false,
        items: state.items.push(action.payload)
      };
    case types.ADD_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const deleteItem = (state = initialState, action) => {
  switch (action.type) {
    case types.DETELE_ITEM_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    case types.DETELE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null
      };
    case types.DETELE_ITEM_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export const updateItem = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_ITEM_START:
      return {
        ...state,
        loaoding: true,
        error: null
      };
    case types.UPDATE_ITEM_SUCCESS:
      return items;
    case types.UPDATE_ITEM_FAIL:
      return {
        ...state,
        error: action.payload
      };
  }
};
