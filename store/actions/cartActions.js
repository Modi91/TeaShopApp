// API Requests
import axios from "axios";
// ActionTypes
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

// this action sends product objects {quantity, name, image}
export const addCart = (productObj, quantity) => ({
  type: actionTypes.ADD_TO_CART,
  payload: { product: productObj, quantity: quantity }
});

export const deleteCartItem = productID => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: productID
});

export const removeItemFromCart = productID => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  payload: productID
});

export const emptyCart = () => ({
  type: actionTypes.EMPTY_CART
});

export const createOrder = orders => {
  return async dispatch => {
    try {
      const res = await instance.post("/api/create/", orders);
      const response = res.data["response"];
      console.log("this is response", response);
      dispatch({
        type: actionTypes.CREATE_ORDER,
        payload: response
      });
    } catch (error) {
      console.error("Something went wrong with create order ", error);
    }
  };
};
