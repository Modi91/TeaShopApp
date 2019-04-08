// ActionTypes
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  history: []
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_HISTORY:
      return {
        ...state,
        orders: action.payload
      };

    default:
      return state;
  }
};

export default historyReducer;
