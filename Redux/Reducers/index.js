import { combineReducers } from "redux";
import restourantReducer from "./RestourantReducer";
import cartReducer from "./CartReducer";

const allReducers = combineReducers({
  restourant: restourantReducer,
  cart: cartReducer,
});

export default allReducers;
