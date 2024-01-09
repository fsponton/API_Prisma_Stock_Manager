import catchedAsync from "../../utils/catchedAsync.js"

import registerUserModule from "./registerUser.js"
import loginUserModule from "./loginUser.js"
import forgotPasswordModule from "./forgotPassword.js"
import resetPasswordModule from "./resetPassword.js"
import getUsersModule from "./getUsers.js"
import updateUserModule from "./updateUser.js"
import deleteUserModule from "./deleteUser.js"
import logOutUserModule from "./logOutUser.js"

export const registerUser = catchedAsync(registerUserModule)
export const loginUser = catchedAsync(loginUserModule)
export const forgotPassword = catchedAsync(forgotPasswordModule)
export const resetPassword = catchedAsync(resetPasswordModule)
export const getUsers = catchedAsync(getUsersModule)
export const updateUser = catchedAsync(updateUserModule)
export const deleteUser = catchedAsync(deleteUserModule)
export const logOutUser = catchedAsync(logOutUserModule)
