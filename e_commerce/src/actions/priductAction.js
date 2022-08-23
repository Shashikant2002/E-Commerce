import axios from "axios";
import {
  ALL_RPODUCT_REQUEST,
  ALL_RPODUCT_SUCCESS,
  ALL_RPODUCT_FAIL,
  CLEAR_ERRORS,
} from "../constants/productConstants";

export const getProduct = () => async (dispatch) => {
  try {
    console.log("hello");
    dispatch({ type: ALL_RPODUCT_REQUEST });
    const { data } = await axios.get("/api/v1/products");
    dispatch({
      type: ALL_RPODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_RPODUCT_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
