import { createUserService } from "@services/user.services";
import { Request, Response } from "express";



// Controlador para crear un usuario
export const createUserController = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body);
        res.status(201).json({success: true, message: "Usuario creado", user: user});
    } catch (error) {
        console.error(`Error en createUserController: ${error}`);
        res.status(500).json({message: "Error al crear el usuario"});
    }
}