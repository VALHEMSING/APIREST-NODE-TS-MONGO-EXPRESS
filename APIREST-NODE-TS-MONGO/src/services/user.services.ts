import { CreateUserDto } from "@dtos/user.dto";
import { IUser } from "@interfaces/user.interfaces";
import User from "@models/user.model";




export const createUserService = async (user: CreateUserDto): Promise<IUser> => {
    // Aquí irá la lógica para crear un usuario
    try {
        console.log("Usuario recibido: ", user);
        const newUser = new User(user); // Creamos una nueva instancia del modelo User
        return await newUser.save(); // Retornamos el nuevo usuario creado
        
    } catch (error) {
        console.error(`Error en createUserService: ${error}`);
        throw Error("Error al crear el usuario");
    }
}