import BaseService from "../../config/DB/baseServices.js";

const baseService = new BaseService('User')

export default async (req, res) => {
    const { id, fullName, email, role, active } = req.userToUpdate
    const result = await baseService.update(id, { fullName, email, role, active })
    return res.status(200)
        .send({ error: false, message: `The user with the id ${result.id} has been update` })
}
