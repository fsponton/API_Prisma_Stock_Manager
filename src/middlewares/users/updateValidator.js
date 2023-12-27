import keysValidator from "../../helpers/users/keysValidator.js"
import { toNewUserEntry } from "../../utils/formValidation/users/toNewUserEntry.js"
import getOriginalLeysPath from "../../helpers/users/getOriginalKeysForPath.js"

export default (req, _res, next) => {

    const originalKeys = getOriginalLeysPath(Number(req.path.slice(1)))

    keysValidator(Object.keys(req.body), originalKeys)

    req.newUserEntry = toUpdateUser({ full_name, email, password })

    // next()
}

