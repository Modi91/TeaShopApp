// ActionTypes
import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  currentProduct: null,
  categories: []
  // orders: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };
    case actionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case actionTypes.SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload
      };
    case actionTypes.REFRESH_CURRENT_PRODUCT:
      let newProduct = state.products.find(product => {
        return product.id === +action.payload;
      });
      return {
        ...state,
        currentProduct: newProduct
      };
    default:
      return state;
  }
};

export default reducer;
