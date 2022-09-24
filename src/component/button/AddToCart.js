import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { handleAddProduct } from "../../redux/action";

const AddToCart = ({ data }) => {
  const dispatch = useDispatch();
  const addToCart = () => handleAddProduct(dispatch, data);

  return (
    <Button variant="dark" onClick={addToCart}>
      Add to Cart
    </Button>
  );
};

export default AddToCart;
