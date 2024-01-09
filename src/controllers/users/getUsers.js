import BaseService from "../../config/DB/baseServices.js";

const baseService = new BaseService('User')

export default async (_req, res) => {
    const result = await baseService.findAll()
    return res.status(200)
        .send({ status: "Success", message: `The users are fetched successfully`, data: result })
}
