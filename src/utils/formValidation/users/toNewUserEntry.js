import { parseToString, isValidEmail, isValidNewPassword } from "../../../helpers/users/users.js"
import { UserError } from "../../errors/index.js";

const toNewUserEntry = ({ full_name, email, password }) => {

    if (!full_name || full_name.trim() === "") {
        throw new UserError("Bad Request: The name of new user can't be empty or null", 400);
    }

    const newEntry = {
        full_name: parseToString(full_name),
        email: isValidEmail(email),
        password: isValidNewPassword(password)
    }

    return newEntry
}

export { toNewUserEntry };