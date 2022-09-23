import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { handleClearCart } from "../../redux/action";
import { selectProductList } from "../../redux/selector";
import Confirmation from "../modal/Confirmation";

const ClearCartButton = () => {
  const [show, setShow] = useState(false);
  const productList = useSelector(selectProductList);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const clearCart = () => {
    handleClearCart(dispatch);
    handleClose();
  };

  if (productList.length === 0) {
    return <></>;
  }
  return (
    <>
      <Button
        variant="dark"
        style={{ width: "45%" }}
        className="py-3 ml-5 fw-bold"
        onClick={handleShow}
      >
        Clear Cart
      </Button>
      <Confirmation
        show={show}
        handleClose={handleClose}
        handleAction={clearCart}
      />
    </>
  );
};

export default ClearCartButton;
