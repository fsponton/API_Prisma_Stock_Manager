import { Router } from "express"
import { registerUser, loginUser, forgotPassword, resetPassword } from "../controllers/users/index.js";
import { loginValidator, registerValidator, verifyToken, resetPasswordValidator } from "../middlewares/users/index.js"


const routerUsers = Router();

routerUsers.post("/register_user", verifyToken, registerValidator, registerUser)

routerUsers.post("/login", loginValidator, loginUser)

routerUsers.post("/forgot_password", forgotPassword)

routerUsers.put("/reset_password", verifyToken, resetPasswordValidator, resetPassword)



export default routerUsers;