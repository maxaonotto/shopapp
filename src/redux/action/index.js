import {
  add,
  clearCart,
  decrease,
  deleteItem,
  increase,
} from "../reducer/productReducer";

export const handleAddProduct = (dispatch, data) => {
  dispatch(add(data));
};
export const handleDecrease = (dispatch, productId, index) => {
  dispatch(decrease({ productId, index }));
};
export const handleIncrease = (dispatch, index) => {
  dispatch(increase(index));
};
export const handleDeleteFromCart = (dispatch, productId, index) => {
  dispatch(deleteItem({ productId, index }));
};
export const handleClearCart = (dispatch) => {
  dispatch(clearCart());
};
