export const selectCartAmount = (state) => state.product.cartAmount;

export const selectTotalPrice = (state) => state.product.totalPrice.toFixed(2);

export const selectProductList = (state) => state.product.productList;
