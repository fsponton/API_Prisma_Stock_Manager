import { parseToString, isValidEmail, isValidNewPassword } from "../../../helpers/users/users.js"
import { UserError } from "../../errors/index.js";

const toNewUserEntry = ({ fullName, email, password }) => {

    if (!fullName || fullName.trim() === "") {
        throw new UserError("Bad Request: The name of new user can't be empty or null", 400);
    }

    const newEntry = {
        fullName: parseToString('fullName', fullName),
        email: isValidEmail(email),
        password: isValidNewPassword(password)
    }

    return newEntry
}

export { toNewUserEntry };