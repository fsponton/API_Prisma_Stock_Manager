import { Router } from "express"
import { registerUser, loginUser, forgotPassword, resetPassword, getUsers, updateUser } from "../controllers/users/index.js";
import { loginValidator, registerValidator, verifyToken, resetPasswordValidator, updateValidator, verifyRole } from "../middlewares/users/index.js"


const routerUsers = Router();

routerUsers.post("/register_user", verifyToken, verifyRole, registerValidator, registerUser)

routerUsers.post("/login", loginValidator, loginUser)

routerUsers.post("/forgot_password", forgotPassword)

routerUsers.put("/reset_password", verifyToken, verifyRole, resetPasswordValidator, resetPassword)

routerUsers.get("/", verifyToken, getUsers)

routerUsers.put("/:userID", verifyToken, verifyRole, updateValidator, updateUser)



export default routerUsers;