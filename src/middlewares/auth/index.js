import loginValidatorModule from "../auth/loginValidator.js"
import verifyTokenModule from "../auth/verifyToken.js";
import resetPasswordModule from "../auth/resetPasswordValidator.js";
import verifyRoleModule from "../auth/verifyRole.js";

export const loginValidator = loginValidatorModule
export const verifyToken = verifyTokenModule
export const resetPasswordValidator = resetPasswordModule
export const verifyRole = verifyRoleModule
