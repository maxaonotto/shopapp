import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LoadMore from "../../component/button/LoadMore";
import NewProduct from "../../component/button/NewProduct";
import ProductsList from "../../component/products/ProductsList";

const ProductsPage = () => {
  const [loadMore, setLoadMore] = useState(6);

  return (
    <Container fluid className="p-0">
      <NewProduct />
      <ProductsList loadMore={loadMore} />
      <LoadMore setLoadMore={setLoadMore} />
    </Container>
  );
};

export default ProductsPage;
