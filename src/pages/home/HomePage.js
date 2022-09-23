import React from "react";
import { Button } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Image
        fluid
        className="d-block mx-auto"
        alt="img"
        src={
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDUFCgvb3-GiVimPpfcWH7_kXV-gGEFVGiRM8f3-ulXRRF54jUqfbC3zrnMcqw-huNKC8&usqp=CAU"
        }
      />
      <Button as={Link} to="/products" className="mx-auto w-25 " variant="dark">
        Go Shopping
      </Button>
    </>
  );
};

export default HomePage;
