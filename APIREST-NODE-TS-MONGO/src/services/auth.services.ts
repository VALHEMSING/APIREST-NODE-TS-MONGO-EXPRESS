import { Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


import { LoginDto } from "@dtos/auth.dto";
import User from "@models/user.model";
import { generateAccestoken, generateRefreshToken } from "@utils/jwt";




export const loginServices = async (data: LoginDto, res: Response) => {

    const { email, password } = data

    try {

        const user = await User.findOne({ email }).exec();
    if (!user) {
      throw new Error("Credenciales incorrectas");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Credenciales incorrectas");
    }

    const accessToken = generateAccestoken(user)
    const refreshToken = generateRefreshToken(user)
    // Guardar el refresh token en la base de datos
    user.refreshToken = [refreshToken] // Sobreescribimos el refresh token
    await user.save()

    // Configurar refreshToken como una cookie http-Only
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // No accesible desde js
      secure: false,
      sameSite: "strict", // Proteccion contra CSRF
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7d      
    })

    console.log('refreshToken: ',refreshToken);
    // Devolver el acces token en la respuesta
    return ({message: "saludos desde la capa logica",token:accessToken})

    } catch (error) {
        console.error(`Error en loginSerices: ${error}`);
        throw Error("Error al iniciar sesion");
    }

}


export const logoutServices = async (userId: string, res: Response) => {
  try {
    // Eliminar el refresh token de la base de datos
    const user = await User.findByIdAndUpdate(userId, { refreshToken: [] }, { new: true }).exec();
    /**
     * Para poder eliminar de manera correcta el refresh token
     * es ideal usar el metodo que nos proporciona mongoose
     * de la siguiente manera 
     * const user = await User.findByIdAndUpdate(userId, { refreshToken: [] }, { new: true }).exec();
     * esto es mas efectico que el siguiente codigo
     * user.refreshToken = []; con esto no se actualizara la base de datos
     */
     if (!user) throw new Error("Usuario no encontrado");
    // user.refreshToken = [];// Limpiar los refresh token

    // // Limpiar la cookie de refresh token
    res.clearCookie("refreshToken");
    return { message: "Sesion cerrada" };

  } catch (error) {
    console.error(`Error en logoutServices: ${error}`);
    throw new Error("Error al cerrar sesion");
  }
}
