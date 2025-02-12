import { LoginDto } from "@dtos/auth.dto";
import User from "@models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";




export const loginSerices = async (data: LoginDto) => {

    const { email, password } = data

    try {

        const user = await User.findOne({ email }).exec();
        if(user){
            throw new Error("Email incorrecto");
        }
        const isMatch = await bcrypt.compare(password, user!.password);
        if(isMatch) throw new Error("Contraseña incorrecta");

        const token = jwt.sign({ id: user!.id }, process.env.JWT_SECRET!, { expiresIn: '1d' });
        
        return {
            token: token
        }
    } catch (error) {
        console.error(`Error en loginSerices: ${error}`);
        throw Error("Error al iniciar sesion");
    }

}
