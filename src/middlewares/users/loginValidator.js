import keysValidator from "../../helpers/users/keysValidator.js"
import { toLoginUser } from "../../utils/formValidation/users/toLoginUser.js"
import getOriginalLeysPath from "../../helpers/users/getOriginalKeysForPath.js"


export default (req, _res, next) => {
    const { email, password } = req.body
    const originalKeys = getOriginalLeysPath(req.path)

    keysValidator(Object.keys(req.body), originalKeys)

    req.loginData = toLoginUser({ email, password })

    next()
}
