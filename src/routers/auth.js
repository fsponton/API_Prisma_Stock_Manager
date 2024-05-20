import { Router } from "express"
import { loginUser, logOutUser, forgotPassword, resetPassword } from "../controllers/users/index.js";
import { loginValidator, verifyToken, resetPasswordValidator } from "../middlewares/auth/index.js"

const routerAuth = Router();

routerAuth.post("/login", loginValidator, loginUser)

routerAuth.post("/logout", verifyToken, logOutUser)

routerAuth.post("/forgot-password", forgotPassword)

routerAuth.put("/reset-password", verifyToken, resetPasswordValidator, resetPassword)

export default routerAuth;