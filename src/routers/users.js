import { Router } from "express"
import { registerUser, loginUser, forgotPassword, resetPassword, getUsers } from "../controllers/users/index.js";
import { loginValidator, registerValidator, verifyToken, resetPasswordValidator, updateValidator } from "../middlewares/users/index.js"


const routerUsers = Router();

routerUsers.post("/register_user", verifyToken, registerValidator, registerUser)

routerUsers.post("/login", loginValidator, loginUser)

routerUsers.post("/forgot_password", forgotPassword)

routerUsers.put("/reset_password", verifyToken, resetPasswordValidator, resetPassword)

routerUsers.get("/", verifyToken, getUsers)

routerUsers.put("/:userID", updateValidator)



export default routerUsers;