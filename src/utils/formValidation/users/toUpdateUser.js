import { parseToString, isValidEmail, isValidNewPassword } from "../../../helpers/users/users.js"
import { isBoolean, isValidRole } from "../../../helpers/genericFunctions.js"
import { UserError } from "../../errors/index.js";

const toUpdateUser = ({ full_name, email, role, active }) => {

    if (!full_name || full_name.trim() === "") {
        throw new UserError("The name of new user can't be empty or null");
    }

    const updateUser = {
        full_name: parseToString('full_name', full_name),
        email: isValidEmail(email),
        role: isValidRole(parseToString('role', role)),
        active: isBoolean('active', active)
    }

    return updateUser
}

export { toUpdateUser };