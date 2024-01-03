import { isBoolean, isNumber, handleNullable } from "../../../helpers/genericFunctions.js";
import { parseToString } from "../../../helpers/users/users.js"

const toNewProduct = ({ name, model, id_category, brand, price, code, available, description, quantity, sector, rack, square_meter, size, weight, id_creator }) => {

    const newEntry = {
        name: parseToString(name),
        model: parseToString(model),
        id_category: isNumber(id_category),
        brand: parseToString(brand),
        price: isNumber(price),
        code: parseToString(code),
        available: isBoolean(available),
        description: parseToString(handleNullable(description)),
        quantity: isNumber(quantity),
        sector: parseToString(handleNullable(sector)),
        rack: parseToString(handleNullable(rack)),
        square_meter: isNumber(handleNullable(square_meter)),
        size: isNumber(handleNullable(square_meter)),
        weight: isNumber(handleNullable(square_meter)),
        id_creator: isNumber(id_creator),
    }

    return newEntry
}

export { toNewProduct };