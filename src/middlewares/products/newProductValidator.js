import keysValidator from "../../helpers/keysValidator.js"
import getOriginalKeysPath from "../../helpers/users/getOriginalKeysForPath.js"


export default (req, _res, next) => {
    const { name, model, id_category, brand, price, code, available, description, quantity, sector, rack, square_meter, size, weight, id_creator } = req.body

    const originalKeys = getOriginalKeysPath(req.path)

    keysValidator(Object.keys(req.body), originalKeys)

    req.newProduct = toNewProduct({ name, model, id_category, brand, price, code, available, description, quantity, sector, rack, square_meter, size, weight, id_creator })

    next()
}
