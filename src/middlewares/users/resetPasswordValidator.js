import keysValidator from "../../helpers/users/keysValidator.js"
import getOriginalLeysPath from "../../helpers/users/getOriginalKeysForPath.js"
import { isValidNewPassword } from "../../helpers/users/users.js"

export default (req, _res, next) => {
    const { password } = req.body
    const originalKeys = getOriginalLeysPath(req.path)

    keysValidator(Object.keys(req.body), originalKeys)

    req.newPassword = isValidNewPassword(password)

    next()
}
