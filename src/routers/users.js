import { Router } from "express"
import { registerUser } from "../controllers/users/index.js";

const routerUsers = Router();

routerUsers.post("/register_user", registerUser)



export default routerUsers;