import { IUser } from "@interfaces/user.interfaces";
import { model, Schema } from "mongoose";


// Definimos el esquema de la colección User
// con los campos name y email
const UserSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

// Exportamos el modelo User
// con el nombre "User" y el esquema UserSchema

export default model<IUser>("User", UserSchema);