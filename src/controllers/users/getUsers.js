import UserService from "../../config/DB/userServices.js"

const baseService = new UserService()

export default async (_req, res) => {
    const result = await baseService.findAll()
    return res.status(200)
        .send({ error: false, message: `The users are fetched successfully`, data: result })
}
