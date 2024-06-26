import { isBoolean, isNumber, handleNullable, parseToString } from "../../../helpers/genericFunctions.js";


const toNewProduct = ({ name, model, idCategory, brand, price, code, available, description, quantity, sector, rack, square_meter, size, weight, id_creator }) => {

    const newEntry = {
        name: parseToString('name', name),
        model: parseToString('model', model),
        idCategory: isNumber('idCategory', idCategory),
        brand: parseToString('brand', brand),
        price: isNumber('price', price),
        code: parseToString('code', code),
        available: isBoolean('available', available),
        description: parseToString('description', handleNullable(description)),
        quantity: isNumber('quantity', quantity),
        sector: parseToString('sector', handleNullable(sector)),
        rack: parseToString('rack', handleNullable(rack)),
        square_meter: isNumber('square_meter', handleNullable(square_meter)),
        size: isNumber('size', handleNullable(size)),
        weight: isNumber('weight', handleNullable(weight)),
        id_creator,
    }

    return newEntry
}

export { toNewProduct };