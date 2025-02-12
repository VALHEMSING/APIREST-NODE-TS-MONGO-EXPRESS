import { loginController } from "@controllers/auth.controllers";
import { Router } from "express";

const router = Router();

// Ruta para iniciar sesion
router.post('/login', loginController)

export default router;