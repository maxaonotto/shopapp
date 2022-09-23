import { createSlice } from "@reduxjs/toolkit";

const getIndex = (state, action) => {
  return state.productList.findIndex((item) => item.id === action.payload.id);
};

const initialState = {
  productList: [],
  cartAmount: 0,
  totalPrice: 0,
};
const productReducer = createSlice({
  name: "product",
  initialState,
  reducers: {
    clearCart(state) {
      state.productList = [];
      state.cartAmount = 0;
      state.totalPrice = 0;
    },
    add(state, action) {
      const itemIndex = getIndex(state, action);
      if (!(itemIndex >= 0)) {
        state.productList.push({ ...action.payload, quantity: 1 });
        state.cartAmount += 1;
        state.totalPrice += action.payload.price;
      } else {
        state.productList[itemIndex].quantity += 1;
        state.cartAmount += 1;
        state.totalPrice += action.payload.price;
      }
    },
    deleteItem(state, action) {
      const { productId, index } = action.payload;
      state.cartAmount -= state.productList[index].quantity;
      state.totalPrice -=
        state.productList[index].price * state.productList[index].quantity;
      state.productList = state.productList.filter(
        (cartItem) => cartItem.id !== productId
      );
    },
    increase(state, action) {
      const index = action.payload;
      state.productList[index].quantity += 1;
      state.cartAmount += 1;
      state.totalPrice += state.productList[index].price;
    },
    decrease(state, action) {
      const { productId, index } = action.payload;
      if (state.productList[index].quantity > 1) {
        state.productList[index].quantity -= 1;
        state.cartAmount -= 1;
        state.totalPrice -= state.productList[index].price;
      } else if (state.productList[index].quantity === 1) {
        state.totalPrice -= state.productList[index].price;
        const nextCartItems = state.productList.filter(
          (cartItem) => cartItem.id !== productId
        );
        state.productList = nextCartItems;
        state.cartAmount -= 1;
      }
    },
  },
});
export const { add, clearCart, increase, decrease, deleteItem } =
  productReducer.actions;
export default productReducer.reducer;
