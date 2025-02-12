import { 
    createUserController,
    deleteUserByIdController, 
    findAllUsersController, 
    findUserByIdController, 
    updateUserByIdController 
} from "@controllers/user.controllers";
import { Router } from "express";




const router = Router();

// Ruta para crear un usuario
router.post('/', createUserController)
// Ruta para obtener todos los usuarios
router.get('/', findAllUsersController)
// Ruta para obtener un usuario por su id
 router.get('/:id', findUserByIdController)
// Ruta para actualizar un usuario por su id
router.put('/:id', updateUserByIdController)
// Ruta para eliminar un usuario por su id
router.delete('/:id', deleteUserByIdController)



export default router; 