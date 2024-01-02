import { parseToString, isValidEmail, isValidNewPassword } from "../../../helpers/users/users.js"
import { isBoolean, isValidRole } from "../../../helpers/genericFunctions.js"

const toUpdateUser = ({ full_name, email, role, active }) => {

    const updateUser = {
        full_name: parseToString(full_name),
        email: isValidEmail(email),
        role: isValidRole(parseToString(role)),
        active: isBoolean(active)
    }

    return updateUser
}

export { toUpdateUser };