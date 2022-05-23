import { useEffect, useState } from "react";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product"

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      popularProducts
        .filter(item => item.cat === cat)
        .filter(item => Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
    );
  }, [cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => a.createdAt - b.createdAt))
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => a.price - b.price))
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a,b) => b.price - a.price))
    }
  },[sort])

  return (
    <Container>
      {filteredProducts.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
}

export default Products;
