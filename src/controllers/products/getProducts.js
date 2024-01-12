import BaseService from "../../config/DB/baseServices.js"

const baseService = new BaseService('Product')

export default async (_req, res) => {
    const result = await baseService.findAll()
    return res.status(200)
        .send({ status: "Success", message: `All products`, data: result })
}
