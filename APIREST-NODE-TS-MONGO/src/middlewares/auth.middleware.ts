import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";




export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    
    const token = req.header('Authorization')?.replace('Bearer', '')

    if (!token) {
        return res.status(401).json({ message: "Acceso denegado. Token no proporcionado" });
    }

    try {
        const decoded = jwt.verify(token, 'secret'!);
        req.body.userid = decoded
        next();
    } catch (error) {
        res.status(401).json({ message: "Acceso denegado. Token inválido" });
    }
}