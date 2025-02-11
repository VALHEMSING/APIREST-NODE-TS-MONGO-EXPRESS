import {connect} from "mongoose";
import dotenv from "dotenv";
import { MONGO_URI } from "./enviroments";

dotenv.config();

const connectDB = async () => {
    try {
        await connect(MONGO_URI)
        console.log("Conectado a la base de datos");
    } catch (error) {
        console.error(`Error al conectar a la base de datos: ${error}`);
        process.exit(1);
    }
}

export default connectDB;