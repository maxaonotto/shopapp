import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productReducer.js";

const rootReducer = combineReducers({
  product: productReducer,
});
export default rootReducer;
