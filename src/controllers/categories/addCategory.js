import BaseService from "../../config/DB/baseServices.js"

const baseService = new BaseService('Category')

export default async (req, res) => {
    const { name, available } = req.body
    const result = await baseService.create({ name, available })
    return res.status(200)
        .send({ status: "Success", message: `The category with name: ${result.name} has been created` })
}
