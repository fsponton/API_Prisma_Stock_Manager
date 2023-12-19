import { parseToString, isValidEmail, isValidNewPassword } from "../../../helpers/users/users.js"

const toNewUserEntry = ({ full_name, email, password }) => {

    const newEntry = {
        full_name: parseToString(full_name),
        email: isValidEmail(email),
        password: isValidNewPassword(password)
    }

    return newEntry
}

export { toNewUserEntry };