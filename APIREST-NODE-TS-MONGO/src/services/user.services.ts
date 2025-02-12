import { CreateUserDto } from "@dtos/user.dto";
import { IUser } from "@interfaces/user.interfaces";
import User from "@models/user.model";



// Función para crear un usuario
export const createUserService = async (user: CreateUserDto): Promise<IUser> => {
    // Aquí irá la lógica para crear un usuario
    try {
        const newUser = new User(user); // Creamos una nueva instancia del modelo User
        return await newUser.save(); // Retornamos el nuevo usuario creado
        
    } catch (error) {
        console.error(`Error en createUserService: ${error}`);
        throw Error("Error al crear el usuario");
    }
}


// Función para actualizar un usuario
export const findAllUsersService = async (): Promise<IUser[]> => {
    try {
        return await User.find();
        
    } catch (error) {
        console.error(`Error en findAllUsersService: ${error}`);
        throw Error("Error al obtener los usuarios");
    }
}