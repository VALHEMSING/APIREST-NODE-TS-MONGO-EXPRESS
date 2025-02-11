import { createUserController } from "@controllers/user.controllers";
import { Router } from "express";




const router = Router();

// Ruta para crear un usuario
router.post('/', createUserController)



export default router; 