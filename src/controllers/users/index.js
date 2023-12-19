import catchedAsync from "../../utils/catchedAsync.js"

import registerUserModule from "./registerUser.js"
import loginUserModule from "./login.js"
// import getUserModule from "./get_users"
// import updateUserModule from "./update_user"
// import deleteUserModule from "./delete_user"
// import disableUserModule from "./disable_user"
// import forgotPasswordModule from "./forgot_password"
// import resetPasswordModule from "./reset_password"

export const registerUser = catchedAsync(registerUserModule)
export const loginUser = catchedAsync(loginUserModule)
// export const getUsers = catchedAsync(getUserModule)
// export const updateUser = catchedAsync(updateUserModule)
// export const deleteUser = catchedAsync(deleteUserModule)
// export const disableUser = catchedAsync(disableUserModule)
// export const forgotPassword = catchedAsync(forgotPasswordModule)
// export const resetPassword = catchedAsync(resetPasswordModule)