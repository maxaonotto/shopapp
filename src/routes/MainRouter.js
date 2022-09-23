import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "../layout/SharedLayout";
import HomePage from "../pages/home/HomePage";
import ProductsListView from "../pages/productsList/ProductsListView";
import ProductView from "../pages/productView/ProductView";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/id=productId" element={<ProductView />} />
          <Route path="products" element={<ProductsListView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
