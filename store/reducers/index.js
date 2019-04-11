// Combine
import { combineReducers } from "redux";

// Reducers
import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import historyReducer from "./historyReducer";
import profileReducer from "./profileReducer";

// Combining the reducers
export default combineReducers({
  authReducer: authReducer,
  products: productsReducer,
  profile: profileReducer,
  cartReducer: cartReducer,
  historyReducer: historyReducer
});
