import * as actionTypes from "../actions/actionTypes";

//  {user : ,profile :}
const initialState = {
  profile: null
};

const resucer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.EMPTY_PROFILE:
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
};

export default resucer;
