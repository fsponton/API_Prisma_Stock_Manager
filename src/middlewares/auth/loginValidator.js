import keysValidator from "../../helpers/keysValidator.js"
import { toLoginUser } from "../../utils/formValidation/auth/toLoginUser.js"
import getOriginalKeysPath from "../../helpers/users/getOriginalKeysForPath.js"


export default (req, _res, next) => {
    const { email, password } = req.body
    const originalKeys = getOriginalKeysPath(req.path)
    keysValidator(Object.keys(req.body), originalKeys)
    req.loginData = toLoginUser({ email, password })
    next()
}
