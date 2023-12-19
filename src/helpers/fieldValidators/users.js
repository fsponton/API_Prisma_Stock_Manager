import { UserError } from "../../utils/errors/index.js"

const isString = (string) => {
    return typeof string === 'string'
}


const parseToString = (valueFromRequest) => {
    if (!isString(valueFromRequest)) {
        throw new Error(`incorrect ${valueFromRequest} or missing value `)
    }
    return valueFromRequest
}


// check the password to create a user or reset password
const passwordRegex = /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

const isValidNewPassword = (password) => {
    const passwordParsed = parseToString(password)
    const isValidPassword = passwordRegex.test(passwordParsed)

    validPasswordLength(passwordParsed)

    if (!isValidPassword) {
        throw new UserError("invalid Password. The password must contain at least 1 uppercase letter, 1 special character, and be a minimum of 6 characters long", 400)
    }

    return passwordParsed
}

// check the length of password when the user tries to login
const validPasswordLength = (password) => {

    if (password.length <= 5) {
        throw new UserError("the password must be at least 6 characters", 400)
    }

    return password
}

// check the email when the user tries create or login
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const isValidEmail = (email) => {
    const emailParsed = parseToString(email).toLocaleLowerCase()
    const isEmail = emailRegex.test(emailParsed)

    if (!isEmail) {
        throw new UserError("Invalid Email", 400);
    }

    return emailParsed;
}

export {
    isValidEmail,
    parseToString,
    isValidNewPassword,
    validPasswordLength
}