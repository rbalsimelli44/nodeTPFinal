import { Router }  from "express";

const router = Router();

import { 
  getAllProducts,
  getProductId,
  addNewProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

// Ruta 1: Mostrar todos los productos
router.get("/productos", getAllProducts);

// Ruta 2: Obtener producto por ID
router.get("/productos/:id", getProductId);

// Ruta 5: Agregar un nuevo producto
router.post("/productos", addNewProduct);

// Ruta 6: Borrar un producto
router.delete("/productos/:id", deleteProduct);

export default router;
