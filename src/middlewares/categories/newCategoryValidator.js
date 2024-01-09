import keysValidator from "../../helpers/keysValidator.js"
import getOriginalKeysPath from "../../helpers/categories/getOriginalKeysForPath.js"
import { toNewCategory } from "../../utils/formValidation/categories/toNewCategory.js"

export default (req, _res, next) => {
    const { name } = req.body

    const originalKeys = getOriginalKeysPath(req.path)

    keysValidator(Object.keys(req.body), originalKeys)

    req.body = toNewCategory({ name })

    next()
}
