import loginKeysValidator from "../../helpers/users/keyValidators/loginKeysValidator.js"
import { toLoginUser } from "../../utils/formValidation/users/toLoginUser.js"

const loginValidator = (req, _res, next) => {
    const { email, password } = req.body

    loginKeysValidator(Object.keys(req.body))

    const loginData = toLoginUser({ email, password })

    req.loginData = loginData

    next()
}

export default loginValidator;