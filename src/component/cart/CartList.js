import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectProductList } from "../../redux/selector";
import DeleteItem from "../button/DeleteItem";
import Empty from "./Empty";
import SetQuantity from "./SetQuantity";

const CartList = () => {
  const productList = useSelector(selectProductList);
  if (productList.length === 0) {
    return <Empty />;
  }
  return productList.map((product, index) => (
    <Row key={product.id} className="px-5 py-1">
      <Card>
        <Card.Body className="d-flex flex-row mx-1 px-1 ">
          <Col sm={4} className="d-flex flex-row text-center ">
            <Link to={`/product/id=${product.id}`} className="mx-2">
              <Card.Img
                variant="left"
                width="200px"
                height="200px"
                src={product.image}
              />
            </Link>
            <Card.Title className="py-3 d-flex flex-column justify-content-around">
              <Card.Text className="text-uppercase fs-6">
                {product.title}
              </Card.Text>
              <DeleteItem productId={product.id} index={index} />
            </Card.Title>
          </Col>
          <Col
            style={{ width: "100%" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Card.Text variant="dark" className="fw-bold fs-5">
              $ {product.price}
            </Card.Text>
          </Col>
          <SetQuantity
            productId={product.id}
            quantity={product.quantity}
            index={index}
          />
          <Col className="d-flex justify-content-center align-items-center">
            <Card.Text className="fw-bold fs-5">
              $ {(product.price * product.quantity).toFixed(2)}
            </Card.Text>
          </Col>
        </Card.Body>
      </Card>
    </Row>
  ));
};

export default CartList;
