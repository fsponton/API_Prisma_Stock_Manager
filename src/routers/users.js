import { Router } from "express"
import { registerUser, loginUser, forgotPassword, resetPassword, getUsers, updateUser, deleteUser, logOutUser, getById } from "../controllers/users/index.js";
import { loginValidator, getByIdValidator, registerValidator, verifyToken, resetPasswordValidator, updateValidator, verifyRole, deleteValidator } from "../middlewares/users/index.js"

const routerUsers = Router();
// verifyToken, verifyRole,
routerUsers.post("/register_user", registerValidator, registerUser)

routerUsers.post("/login", loginValidator, loginUser)

routerUsers.post("/forgot_password", forgotPassword)

routerUsers.put("/reset_password", verifyToken, resetPasswordValidator, resetPassword)

routerUsers.get("/", verifyToken, getUsers)

routerUsers.get("/:userID", verifyToken, getByIdValidator, getById)

routerUsers.put("/:userID", verifyToken, verifyRole, updateValidator, updateUser)

routerUsers.delete("/delete", verifyToken, verifyRole, deleteValidator, deleteUser)

routerUsers.post("/logout", verifyToken, logOutUser)


export default routerUsers;