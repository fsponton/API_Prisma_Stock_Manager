import { parseToString, isValidEmail, isValidNewPassword } from "../../../helpers/users/users.js"
import { isBoolean, isValidRole } from "../../../helpers/genericFunctions.js"
import { UserError } from "../../errors/index.js";

const toUpdateUser = ({ fullName, email, role, active }) => {

    if (!fullName || fullName.trim() === "") {
        throw new UserError("The name of new user can't be empty or null");
    }

    const updateUser = {
        fullName: parseToString('fullName', fullName),
        email: isValidEmail(email),
        role: isValidRole(parseToString('role', role)),
        active: isBoolean('active', active)
    }

    return updateUser
}

export { toUpdateUser };