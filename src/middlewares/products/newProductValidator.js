import keysValidator from "../../helpers/keysValidator.js"
import getOriginalKeysPath from "../../helpers/products/getOriginalKeysForPath.js"
import { toNewProduct } from "../../utils/formValidation/products/toNewProduct.js"


export default (req, _res, next) => {
    const { name, model, id_category, brand, price, code, available, description, quantity, sector, rack, square_meter, size, weight, id_creator } = req.body
    const { token } = req

    const originalKeys = getOriginalKeysPath(req.path)

    keysValidator(Object.keys(req.body), originalKeys)

    req.newProduct = toNewProduct({ name, model, id_category, brand, price, code, available, description, quantity, sector, rack, square_meter, size, weight, id_creator: token.id })

    next()
}
