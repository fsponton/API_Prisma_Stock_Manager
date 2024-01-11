import { isBoolean, isNumber, handleNullable, parseToString } from "../../../helpers/genericFunctions.js";


const toNewProduct = ({ name, model, id_category, brand, price, code, available, description, quantity, sector, rack, square_meter, size, weight, id_creator }) => {

    const newEntry = {
        name: parseToString('name', name),
        model: parseToString('model', model),
        id_category: isNumber('id_category', id_category),
        brand: parseToString('brand', brand),
        price: isNumber('price', price),
        code: parseToString('code', code),
        available: isBoolean('available', available),
        description: parseToString('description', handleNullable(description)),
        quantity: isNumber('quantity', quantity),
        sector: parseToString('sector', handleNullable(sector)),
        rack: parseToString('rack', handleNullable(rack)),
        square_meter: isNumber('square_meter', handleNullable(square_meter)),
        size: isNumber('size', handleNullable(square_meter)),
        weight: isNumber('weight', handleNullable(square_meter)),
        id_creator,
    }

    return newEntry
}

export { toNewProduct };