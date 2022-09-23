import React from "react";
import { Link } from "react-router-dom";
import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import AddProduct from "../button/AddProduct";
const Product = ({ data }) => {
  const { title, price, image, id } = data;

  return (
    <Col className="col-xs-7 col-sm-5 col-md-4 col-lg-4 col-xl-3 col-xxl-2 my-4">
      <Card className="h-100 w-100 text-center pt-3" key={id}>
        <Link to={`/product/id=${id}`}>
          <Card.Img
            variant="top"
            style={{
              height: "150px",
              width: "150px",
            }}
            src={image}
          />
        </Link>
        <Card.Body className="d-flex flex-column justify-content-between">
          <Card.Title className="fs-6">{title}</Card.Title>
          <Card.Text className="lead fw-bold">$ {price}</Card.Text>
          <AddProduct data={data} />
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
