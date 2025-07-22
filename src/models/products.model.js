import fs from "fs";
import path from "path";

const __dirname = import.meta.dirname;

const jsonPath = path.join(__dirname, "./products.json");

const json = fs.readFileSync(jsonPath, "utf-8");

const productos = JSON.parse(json);

export const getAllProducts = () => {
    return productos;
};

export const getProductId = (productoId) => {
    return productos.find(producto => producto.id === productoId);
}

export const addNewProduct = (datos) => {
    console.log({ ...datos });
    const newProduct = {
        id: productos.length + 1,
        ...datos,
    };

  productos.push(newProduct);

  fs.writeFileSync(jsonPath, JSON.stringify(productos));

  return newProduct;
};