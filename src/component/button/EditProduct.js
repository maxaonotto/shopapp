import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { editProduct } from "../../services/getProducts";
import ProductInfo from "../modal/ProductInfo";

const EditProduct = ({ data }) => {
  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);
  const handleEdit = () =>
    editProduct(data).then((res) => console.log(res.data));

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Edit Product
      </Button>
      <ProductInfo
        modal={modal}
        data={data}
        handleClose={handleClose}
        handleAction={handleEdit}
      />
    </>
  );
};

export default EditProduct;
