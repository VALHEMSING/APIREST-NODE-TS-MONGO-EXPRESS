import { loginServices } from "@services/auth.services";
import { Request, Response } from "express";


export const loginController = async (req: Request, res: Response) => {

    try {
        console.log(req.body);
        const user = await loginServices(req.body);
        res.status(200).json({message: "User logged in", user: user});

    } catch (error) {
        console.error(`Error en loginController: ${error}`);
        res.status(500).json({message: "Controller: Error al iniciar sesion"});
    }

}