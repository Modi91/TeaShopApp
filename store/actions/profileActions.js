// API Requests
import axios from "axios";
// ActionTypes
import * as actionTypes from "./actionTypes";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000"
});

export const updateProfile = profile => {
  return async dispatch => {
    try {
      const res = await instance.put("/api/profile/update/", profile);
      const response = res.data;
      dispatch({
        type: actionTypes.UPDATE_PROFILE,
        payload: response
      });
    } catch (error) {
      console.error("Something went wrong with update your profile ", error);
    }
  };
};

export const fetchProfile = () => {
  return async dispatch => {
    try {
      const res = await instance.get("/api/profile/");
      const profile = res.data;

      dispatch({
        type: actionTypes.FETCH_PROFILE,
        payload: profile
      });
    } catch (error) {
      console.error("Something went wrong with your profile ", error);
    }
  };
};

export const emptyProfile = () => ({
  type: actionTypes.EMPTY_PROFILE,
  payload: null
});
