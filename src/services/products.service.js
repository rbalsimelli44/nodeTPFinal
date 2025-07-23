import * as model from "../models/products.model.js";

export const getAllProducts = () => {
  return model.getAllProducts();
};

export const getProductId = (productoId) => {
  return model.getProductId(productoId);
};

export const addNewProduct = ({ nombre, categoria, precio }) => {
  return model.addNewProduct({ nombre, categoria, precio });
};

export const deleteProduct = (productoId) => {
  return model.deleteProduct(productoId);
};