import keysValidator from "../../helpers/keysValidator.js"
import { toNewUserEntry } from "../../utils/formValidation/users/toNewUserEntry.js"
import getOriginalKeysPath from "../../helpers/users/getOriginalKeysForPath.js"

export default (req, _res, next) => {
    const { fullName, email, password } = req.body
    const originalKeys = getOriginalKeysPath(req.path)

    keysValidator(Object.keys(req.body), originalKeys)

    req.newUserEntry = toNewUserEntry({ fullName, email, password })

    next()
}

