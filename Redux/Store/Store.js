import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "../Reducers";
import restourantReducer from "../Reducers/RestourantReducer";

const store = createStore(allReducers, applyMiddleware(thunk));
export default store;
