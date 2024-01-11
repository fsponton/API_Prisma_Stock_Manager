import keysValidator from "../../helpers/keysValidator.js"
import getOriginalKeysPath from "../../helpers/users/getOriginalKeysForPath.js"
import { isNumber } from "../../helpers/genericFunctions.js"
import { UserError } from "../../utils/errors/index.js"


export default (req, _res, next) => {
    const { id } = req.body

    const originalKeys = getOriginalKeysPath(req.path)

    keysValidator(Object.keys(req.body), originalKeys)

    if (!isNumber('id', id) || id === null) { throw new UserError("The id needs to be numeric and not null") }

    req.idUserToDelete = id

    next()
}
