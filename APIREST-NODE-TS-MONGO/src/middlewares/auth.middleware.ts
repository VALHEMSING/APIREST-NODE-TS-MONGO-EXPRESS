import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IUser } from "@interfaces/user.interfaces";
import User from "@models/user.model"; // Asegúrate de importar el modelo correcto

// Clave secreta para firmar y verificar tokens
const SECRET_KEY = process.env.JWT_SECRET || "default_secret_key";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void | any>   => {
  try {
    // Extraer el token del encabezado de autorización
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Acceso denegado. Token no proporcionado." });
    }

    const token = authHeader.split(" ")[1];

    // Verificar y decodificar el token
    const decoded = jwt.verify(token, SECRET_KEY) as { id: string };

    // Buscar al usuario en la base de datos
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "Usuario no encontrado." });
    }

    // Adjuntar el usuario al objeto de solicitud
    req.body.user = user;

    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ message: "Token inválido o expirado." });
  }
};