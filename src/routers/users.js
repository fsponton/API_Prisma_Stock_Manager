import { Router } from "express"
import { registerUser, getUsers, updateUser, deleteUser, getById } from "../controllers/users/index.js";
import { getByIdValidator, registerValidator, updateValidator, deleteValidator } from "../middlewares/users/index.js"
import { verifyToken, verifyRole } from "../middlewares/auth/index.js"



const routerUsers = Router();
// verifyToken, verifyRole,
routerUsers.post("/", registerValidator, registerUser)


routerUsers.get("/", verifyToken, getUsers)

routerUsers.get("/:userID", verifyToken, getByIdValidator, getById)

routerUsers.put("/:userID", verifyToken, verifyRole, updateValidator, updateUser)

routerUsers.delete("/:userId", verifyToken, verifyRole, deleteValidator, deleteUser)

export default routerUsers;