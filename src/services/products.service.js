import * as model from "../models/products.model.js";

export const getAllProducts = async () => {
  return await model.getAllProducts();
};

export const getProductId = async (productoId) => {
  return await model.getProductId(productoId);
};

export const addNewProduct = async ({ nombre, categoria, precio }) => {
  return await model.addNewProduct({ nombre, categoria, precio });
};

export const deleteProduct = async (productoId) => {
  return await model.deleteProduct(productoId);
};