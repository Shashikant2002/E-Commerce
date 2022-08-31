import axios from "axios";
import {
  ALL_RPODUCT_REQUEST,
  ALL_RPODUCT_SUCCESS,
  ALL_RPODUCT_FAIL,

  ALL_DETAILS_REQUEST,
  ALL_DETAILS_FAIL,
  ALL_DETAILS_SUCCESS,

  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_RPODUCT_REQUEST });
    const { data } = await axios.get("/api/v1/products");

    dispatch({
      type: ALL_RPODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_RPODUCT_FAIL,
      payload: error.response.data.maessage,
    });
  }
};
// Clear Errors
export const clearErrors = async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ALL_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/v1/products/${id}`);

    dispatch({
      type: ALL_DETAILS_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: ALL_DETAILS_FAIL,
      payload: error.response.data.maessage,
    });
  }
};