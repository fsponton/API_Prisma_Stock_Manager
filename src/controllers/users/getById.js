import UserService from "../../config/DB/userServices.js"

const userService = new UserService()

export default async (req, res) => {
    const { id } = req
    const result = await userService.findById(id)
    return res.status(200)
        .send({ status: "Success", message: `User fetched successfully`, data: result })
}
