import * as service from "../services/products.service.js";

// Función 1: Mostrar todos los productos
export const getAllProducts = (req, res) => {
    res.json(service.getAllProducts());
};

// Función 2: Obtener producto por ID
export const getProductId = (req, res) => {
    const productoId = parseInt(req.params.id);
    const producto = service.getProductId(productoId);

    if (producto) {
      res.json(producto);
    } else {
      res.status(404).json({ error:"Producto no encontrado" });
    };
};

// Función 5: Agregar un nuevo producto
export const addNewProduct = (req, res) => {
  console.log(req.body)
  const  { nombre, categoria, precio } = req.body;

  const newProduct = model.addNewProduct({ nombre, categoria, precio });

  res.status(201).json(newProduct);
};

// Función 6: Borrar un producto
export const deleteProduct = (req, res) => {
  const productoId = parseInt(req.params.id);
  const producto = productos.find(producto => producto.id === productoId);

  if (producto) {
    res.json(producto);
  } else {
    res.status(404).send('Producto no encontrado');
  }

  res.status(204).json(deleteProduct);
};
