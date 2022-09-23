import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/getProducts";

export default function useSingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getProduct(productId, setProduct)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct({}));
  }, [productId]);

  return [product, setProduct];
}
