import axios from "axios";
import * as actionTypes from "../constants/productConstant.js";

const url = "http://localhost:8000";

const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${url}/products`);
    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
    console.log("Error while calling getproducts api", error.message);
  }
};

export default getProducts;
