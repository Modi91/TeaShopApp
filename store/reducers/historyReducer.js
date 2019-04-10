// ActionTypes
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  history: []
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS_HISTORY:
      const currentUsersHistory = action.payload.filter(
        order => order.user === action.user
      );

      return {
        ...state,
        history: currentUsersHistory
      };

    default:
      return state;
  }
};

export default historyReducer;
