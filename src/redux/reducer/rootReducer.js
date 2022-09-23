import { combineReducers } from "@reduxjs/toolkit";
import productReducerJs from "./productReducer,js";

const rootReducer = combineReducers({
  product: productReducerJs,
});
export default rootReducer;
