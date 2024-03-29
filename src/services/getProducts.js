import axios from "axios";
const productsUrl = "https://fakestoreapi.com/products";

export const getListOfProducts = () => {
  return axios.get(productsUrl);
};

export const getProduct = (id) => {
  return axios.get(`${productsUrl}/${id}`);
};

export const getProductCategory = (category) => {
  return axios.get(`${productsUrl}/category/${category}`);
};

export const addNewProduct = (data) => {
  return axios.post(productsUrl, data);
};

export const editProduct = (data, id) => {
  return axios.put(`${productsUrl}/${id}`, data);
};
