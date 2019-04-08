// Redux
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// Reducer
import rootReducer from "./reducers";

// React DevTools

// Creating the store
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
