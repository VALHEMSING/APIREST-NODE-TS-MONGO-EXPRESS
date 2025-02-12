import { CreateUserDto, UpdateUserDto } from "@dtos/user.dto";
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
        return await User.find().exec();
        
    } catch (error) {
        console.error(`Error en findAllUsersService: ${error}`);
        throw Error("Error al obtener los usuarios");
    }
}


// Función para traer un user por su id
export const findUserByIdService = async (id: string): Promise<IUser | null> =>{

    try {
        const user = await User.findById(id).exec();
        return user
    } catch (error) {
        console.error(`Error en findUserByIdService: ${error}`);
        throw Error("Error al obtener el usuario");
    }
}


// Función para actualizar un user por su id
export const updateUserByIdService = async (id: string, user: UpdateUserDto): Promise<IUser | null> =>{
    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true }).exec();
        return updatedUser
    } catch (error) {
        console.error(`Error en updateUserByIdService: ${error}`);
        throw Error("Error al actualizar el usuario");
    }
}

// Función para eliminar un user por su id
export const deleteUserByIdService = async (id: string): Promise<IUser | null> => {
    try {
        const deletedUser = await User.findByIdAndDelete(id).exec();
        return deletedUser
    } catch (error) {
        console.error(`Error en deleteUserByIdService: ${error}`);
        throw Error("Error al eliminar el usuario");
    }
}
