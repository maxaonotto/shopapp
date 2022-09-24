import React, { useState } from "react";
import { Button, Col } from "react-bootstrap";
import { addNewProduct } from "../../services/getProducts";
import ProductInfo from "../modal/ProductInfo";

const NewProduct = () => {
  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  const handleAdd = (data) =>
    addNewProduct(data).then((res) => {
      console.log(res.data);
      handleClose();
    });

  return (
    <Col>
      <Button
        variant="outline-dark"
        className="mx-5 mt-3 fw-bold"
        onClick={handleShow}
      >
        New Product
      </Button>
      <ProductInfo
        modal={modal}
        handleClose={handleClose}
        handleAction={handleAdd}
      />
    </Col>
  );
};

export default NewProduct;
