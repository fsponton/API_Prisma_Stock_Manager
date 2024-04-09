import BaseService from "../../config/DB/baseServices.js"

const baseService = new BaseService('User')

export default async (req, res) => {
    const { idUserToDelete } = req
    const result = await baseService.delete(idUserToDelete)
    return res.status(200)
        .send({ error: false, message: `The user with the id ${result.id} and email ${result.email} has been delete` })
}
