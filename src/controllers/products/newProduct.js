import BaseService from "../../config/DB/baseServices.js"

const baseService = new BaseService('Product')

export default async (req, res) => {
    const { name, model, id_category, brand, price, code, available, description, quantity, sector, rack, square_meter, size, weight, id_creator } = req.newProduct

    const result = await baseService.create({
        name,
        model,
        id_category,
        brand,
        price,
        code,
        available,
        description,
        quantity,
        sector,
        rack,
        square_meter,
        size,
        weight,
        id_creator
    })

    return res.status(200)
        .send({ error: false, message: `The product with name: ${result.name} has been created` })
}
