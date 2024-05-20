import keysValidator from "../../helpers/keysValidator.js"
import getOriginalKeysPath from "../../helpers/users/getOriginalKeysForPath.js"
import { toUpdateUser } from "../../utils/formValidation/users/toUpdateUser.js"

export default (req, _res, next) => {
    const { fullName, email, role, active } = req.body
    const originalKeys = getOriginalKeysPath(Number(req.path.slice(1)))

    keysValidator(Object.keys(req.body), originalKeys)

    const userDataToUpdate = toUpdateUser({ fullName, email, role, active })

    req.userToUpdate = ({ ...userDataToUpdate, id: Number(req.path.slice(1)) })

    next()
}

