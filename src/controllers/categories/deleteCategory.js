
import BaseService from "../../config/DB/baseServices.js"

const baseService = new BaseService('Category')


export default async (req, res) => {
    const categoryID = Number(req.path.slice(1))
    const result = await baseService.delete(categoryID)
    return res.status(200)
        .send({ error: false, message: `The category with name: ${result.name} has been deleted` })
}

