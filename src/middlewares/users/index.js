import catchedAsync from "../../utils/catchedAsync.js";

import loginValidatorModule from "./loginValidator.js"
import registerValidatorModule from "./registerValidator.js";

export const loginValidator = catchedAsync(loginValidatorModule)
export const registerValidator = catchedAsync(registerValidatorModule)
