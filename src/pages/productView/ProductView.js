import React from "react";
import useSingleProduct from "../../hooks/useSingleProduct";

import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import AddProduct from "../../component/button/AddProduct";

const ProductView = () => {
  const [product] = useSingleProduct();
  // const dispatch = useDispatch();
  return (
    <Card
      className="flex-xl-row flex-lg-column
        justify-content-lg-center
      text-center p-3 rounded-0"
    >
      <Card.Img
        style={{ width: "50vw", height: "60vh" }}
        src={product.image}
        className="mx-auto"
      />
      <Card.Body className="md-6 px-5 text-black">
        <Card.Text className="text-uppercase">{product.category}</Card.Text>
        <Card.Title className="text-uppercase my-5">{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text className="lead fw-bolder m-5">
          Rating {product.rating && product.rating.rate}
          <FontAwesomeIcon className="fs-5 px-1" icon={faStar} />
        </Card.Text>
        <Card.Text className="fw-bold fs-5 my-4">$ {product.price}</Card.Text>
        <AddProduct />
      </Card.Body>
    </Card>
  );
};

export default ProductView;
