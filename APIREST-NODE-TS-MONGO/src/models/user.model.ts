import { ERoles } from "@enums/role.enum";
import { IUser } from "@interfaces/user.interfaces";
import { model, Schema } from "mongoose";


// Definimos el esquema de la colección User
// con los campos name y email
const UserSchema = new Schema<IUser>(
    {
        documento: { 
            type: String, 
            required: true },
        nombres: { 
            type: String, 
            required: true },
        apellidos: { 
            type: String, 
            required: true },
        email: { 
            type: String, 
            required: true },
        password: { 
            type: String, 
            required: true },
        roles: { 
            type: [String], 
            enum:Object.values(ERoles), 
            default: [ERoles.USER] },
        estado:{
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
    }
)

// Exportamos el modelo User
// con el nombre "User" y el esquema UserSchema

export default model<IUser>("User", UserSchema);