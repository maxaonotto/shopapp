import React from "react";
import { Button, Row } from "react-bootstrap";

const LoadMoreButton = ({ setLoadMore }) => {
  const handleMore = () => setLoadMore((current) => current + 6);

  return (
    <Row className="m-0 pb-4 d-flex justify-content-center">
      <Button
        className="w-25 fw-bold"
        variant="outline-dark"
        onClick={handleMore}
      >
        Load More
      </Button>
    </Row>
  );
};

export default LoadMoreButton;
