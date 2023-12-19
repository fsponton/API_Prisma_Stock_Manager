import { Router } from "express"
import { registerUser, loginUser } from "../controllers/users/index.js";
import { loginValidator } from "../middlewares/users/index.js"

const routerUsers = Router();

routerUsers.post("/register_user", registerUser)

routerUsers.post("/login", loginValidator, loginUser)



export default routerUsers;