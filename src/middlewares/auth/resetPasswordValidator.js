import keysValidator from "../../helpers/keysValidator.js"
import getOriginalKeysPath from "../../helpers/users/getOriginalKeysForPath.js"
import { isValidNewPassword } from "../../helpers/users/users.js"

export default (req, _res, next) => {
    const { password } = req.body
    const originalKeys = getOriginalKeysPath(req.path)

    keysValidator(Object.keys(req.body), originalKeys)

    req.newPassword = isValidNewPassword(password)

    next()
}
