import { LoginDto } from "@dtos/auth.dto";
import User from "@models/user.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";




export const loginServices = async (data: LoginDto) => {

    const { email, password } = data

    try {

        const user = await User.findOne({ email }).exec();
    if (!user) {
      throw new Error("Credenciales incorrectas");
    }

    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) {
    //   throw new Error("Credenciales incorrectas");
    // }

    const token = jwt.sign(
      { id: user._id, role: user.roles },
      process.env.JWT_SECRET! || "secret",
      { expiresIn: '1d' }
    );

    return { token };
    } catch (error) {
        console.error(`Error en loginSerices: ${error}`);
        throw Error("Error al iniciar sesion");
    }

}
