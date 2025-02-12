import { ERoles } from "@enums/role.enum";
import { NextFunction, Request, Response } from "express";




export const roleMiddleware = (requiredRole: ERoles) => {
    return (req: Request, res: Response, next: NextFunction) => {
        
        const userRole = req.body.roles

        if(userRole.includes(requiredRole)) {
            next();
        } else {
            res.status(403).json({ message: "Acceso denegado. No tienes permiso para realizar esta acción" });
        }
    }
}