import { Router } from "express"
import { registerUser, loginUser } from "../controllers/users/index.js";

const routerUsers = Router();

routerUsers.post("/register_user", registerUser)

routerUsers.post("/login", loginUser)



export default routerUsers;