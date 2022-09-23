import React from "react";
import { Button } from "react-bootstrap";

const AddProduct = () => {
  return (
    <Button
      variant="dark"
      // onClick={() => dispatch(addToCart(product))}
    >
      Add to Cart
    </Button>
  );
};

export default AddProduct;
