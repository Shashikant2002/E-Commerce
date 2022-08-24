import {
  ALL_RPODUCT_REQUEST,
  ALL_RPODUCT_SUCCESS,
  ALL_RPODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_RPODUCT_REQUEST:
      return {
        loading: true,
        products: [],
        productsCount: 0,
      };

    case ALL_RPODUCT_SUCCESS:
      return {
        loading: false,
        products: action.payload.allProd,
        productsCount: action.payload.productCount,
      };

    case ALL_RPODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};
