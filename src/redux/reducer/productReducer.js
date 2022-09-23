import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
  cartAmount: 0,
};
const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct(state) {},
  },
});
export const { addProduct } = productReducer.actions;
export default productReducer.reducer;
