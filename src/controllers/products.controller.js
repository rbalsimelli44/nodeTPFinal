import * as service from "../services/products.service.js";

// Función 1: Mostrar todos los productos
export const getAllProducts = async (req, res) => {
    res.json( await service.getAllProducts());
};

// Función 2: Obtener producto por ID
export const getProductId = async (req, res) => {
    const productoId = req.params.id;
 
    const producto = await service.getProductId(productoId);

    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ error:"Producto no encontrado" });
    };
};

// Función 5: Agregar un nuevo producto
export const addNewProduct = async (req, res) => {
  
  const  { nombre, categoria, precio } = req.body;

  const newProduct = await service.addNewProduct({ nombre, categoria, precio });

  res.status(201).json(newProduct);
};

// Función 6: Borrar un producto
export const deleteProduct = async (req, res) => {
  const productoId = req.params.id;
  
  const producto = await service.deleteProduct(productoId);

  if (!producto) {
    return res.status(404).json({ error: "Producto no encontrado" })
  }

  res.status(204).send();

};
