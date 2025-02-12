import { createUserService, deleteUserByIdService, findAllUsersService, findUserByIdService, updateUserByIdService } from "@services/user.services";
import { Request, Response } from "express";



// Controlador para crear un usuario
export const createUserController = async (req: Request, res: Response) => {
    try {
        const user = await createUserService(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error(`Error en createUserController: ${error}`);
        res.status(500).json({message: "Controller: Error al crear el usuario"});
    }
}

// Controlador para obtener todos los usuarios
export const findAllUsersController = async (req: Request, res: Response) => {
    try {
        const users = await findAllUsersService();
        res.status(200).json(users);
    } catch (error) {
        console.error(`Error en findAllUsersController: ${error}`);
        res.status(500).json({message: "Controller: Error al obtener los usuarios"});
    }
}

// Controlador para obtener un usuario por su id
export const findUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await findUserByIdService(id);
        res.status(200).json(user);
    } catch (error) {
        console.error(`Error en findUserByIdController: ${error}`);
        res.status(500).json({message: "Controller: Error al obtener el usuario"});
    }
}

// Controlador para actualizar un usuario por su id
export const updateUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await updateUserByIdService(id, req.body);
        res.status(200).json(user);
    } catch (error) {
        console.error(`Error en updateUserByIdController: ${error}`);
        res.status(500).json({message: "Controller: Error al actualizar el usuario"});
    }
}


// Controlador para eliminar un usuario por su id
export const deleteUserByIdController = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const user = await deleteUserByIdService(id);
        res.status(200).json(user);
    } catch (error) {
        console.error(`Error en deleteUserByIdController: ${error}`);
        res.status(500).json({message: "Controller: Error al eliminar el usuario"});
    }
}