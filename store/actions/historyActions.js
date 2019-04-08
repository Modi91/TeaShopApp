// API Requests
import axios from "axios";
// ActionTypes
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const fetchOrdersHistory = () => {
  return async dispatch => {
    try {
      const res = await instance.get("api/orders");
      const orders = res.data;
      dispatch({
        type: actionTypes.FETCH_ORDERS_HISTORY,
        payload: orders
      });
    } catch (error) {
      console.log("Something went wrong with ", error);
    }
  };
};
