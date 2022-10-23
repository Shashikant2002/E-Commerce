import {
  ALL_RPODUCT_REQUEST,
  ALL_RPODUCT_SUCCESS,
  ALL_RPODUCT_FAIL,
  ALL_DETAILS_REQUEST,
  ALL_DETAILS_FAIL,
  ALL_DETAILS_SUCCESS,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const productReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ALL_RPODUCT_REQUEST:
      return {
        loading: true,
        products: [],
        productsCount: 0,
        error: false,
      };
      
      case ALL_RPODUCT_SUCCESS:
      console.log("request");
      return {
        loading: false,
        products: action.payload.product,
        productsCount: action.payload.productCount,
        resultPerPage: action.payload.resultPerPage,
        filteredProduct: action.payload.filteredProduct,
        error: false,
      };

    case ALL_RPODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
        products: [],
        productsCount: 0,
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

export const productDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case ALL_DETAILS_REQUEST:
      return {
        loading: true,
        ...state,
      };

    case ALL_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };

    case ALL_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
        product: {},
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
