import { Router }  from "express";

const router = Router();

import { 
  getAllUsers,
  getUserId 
} from "../controllers/users.controller.js";

// Ruta 3: Mostrar todos los usuarios
router.get('/usuarios', getAllUsers);

// Ruta 4: Obtener usuario por ID
router.get('/usuarios/:id', getUserId);

export default router;
