import keysValidator from "../../helpers/users/keysValidator.js"
import { toLoginUser } from "../../utils/formValidation/users/toLoginUser.js"

const loginValidator = (req, _res, next) => {
    const { email, password } = req.body
    const originalKeys = ["email", "password"]

    keysValidator(Object.keys(req.body), originalKeys)

    req.loginData = toLoginUser({ email, password })

    next()
}

export default loginValidator;