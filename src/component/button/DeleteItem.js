import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import { handleDeleteFromCart } from "../../redux/action";
import Confirmation from "../modal/Confirmation";

const DeleteItem = ({ productId, index }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteFromCart = () => {
    handleDeleteFromCart(dispatch, productId, index);
    handleClose();
  };

  return (
    <>
      <Button variant="dark" className="my-1 mx-5 w-50" onClick={handleShow}>
        Delete
      </Button>
      <Confirmation
        show={show}
        handleClose={handleClose}
        handleAction={deleteFromCart}
      />
    </>
  );
};

export default DeleteItem;
