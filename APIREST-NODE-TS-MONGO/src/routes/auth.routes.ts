import { loginController, logoutController } from "@controllers/auth.controllers";
import { authMiddleware } from "@middlewares/auth.middleware";
import { Router } from "express";

const router = Router();

// Ruta para iniciar sesion
router.post('/login', loginController)

// Ruta para cerrar sesion
router.post('/logout', authMiddleware, logoutController)

export default router;