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

export const getProduct =
  (keyword = "", currentPage = 1, rangeMin = "0", rangeMax = "25000000") =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_RPODUCT_REQUEST });
      let link = `/api/v1/products?keyword=${keyword}&page=${currentPage}&price[gte]=${rangeMin}&price[lte]=${rangeMax}`;
      const { data } = await axios.get(link);

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
