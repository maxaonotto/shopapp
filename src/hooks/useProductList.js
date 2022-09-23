import { useEffect, useState } from "react";
import { getListOfProducts } from "../services/getProducts";

export default function useProductList() {
  const [list, setList] = useState([]);

  useEffect(() => {
    getListOfProducts()
      .then((res) => setList(res.data))
      .catch(() => setList([]));
  }, []);
  return [list, setList];
}
