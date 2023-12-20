import keysValidator from "../../helpers/users/keysValidator.js"
import { toNewUserEntry } from "../../utils/formValidation/users/toNewUserEntry.js"

const registerValidator = (req, _res, next) => {
    const { full_name, email, password } = req.body
    const originalKeys = ["full_name", "email", "password"]

    keysValidator(Object.keys(req.body), originalKeys)

    req.newUserEntry = toNewUserEntry({ full_name, email, password })

    next()
}

export default registerValidator;