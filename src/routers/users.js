import { Router } from "express"
import { registerUser, loginUser } from "../controllers/users/index.js";
import { loginValidator, registerValidator, verifyToken } from "../middlewares/users/index.js"

const routerUsers = Router();

routerUsers.post("/register_user", verifyToken, registerValidator, registerUser)

routerUsers.post("/login", loginValidator, loginUser)



export default routerUsers;