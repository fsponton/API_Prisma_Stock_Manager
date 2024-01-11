import BaseService from "../../config/DB/baseServices.js";

const baseService = new BaseService('User')

export default async (req, res) => {
    const { id } = req
    const result = await baseService.findById(id)
    return res.status(200)
        .send({ status: "Success", message: `User fetched successfully`, data: result })
}
