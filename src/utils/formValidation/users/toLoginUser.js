import { isValidEmail, isValidPassword } from "../../../helpers/users/users.js"

const toLoginUser = ({ email, password }) => {

    const loginData = {
        email: isValidEmail(email),
        password: isValidPassword(password)
    }

    return loginData
}

export { toLoginUser };