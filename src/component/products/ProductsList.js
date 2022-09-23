import React from "react";
import useProductList from "../../hooks/useProductList";
import { Row } from "react-bootstrap";
import Product from "./Product";

const ProductsList = ({ loadMore }) => {
  const [list] = useProductList();

  return (
    <>
      <Row className="m-0 d-flex justify-content-center">
        {list.slice(0, loadMore).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </Row>
    </>
  );
};

export default ProductsList;
