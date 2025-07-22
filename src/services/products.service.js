import * as model from "../models/products.model.js";

export const getAllProducts = () => {
  return model.getAllProducts();
};

export const getProductId = (productoId) => {
  return model.getProductId(productoId);
};
