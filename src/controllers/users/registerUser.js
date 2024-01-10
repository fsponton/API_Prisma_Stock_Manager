import BaseService from "../../config/DB/baseServices.js"
import bcrypt from "bcryptjs"

const baseService = new BaseService('User')

export default async (req, res) => {
    const { full_name, email, password } = req.newUserEntry

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt)

    const result = await baseService.create({ full_name, email, password: passwordHash })
    return res.status(200)
        .send({ status: "Success", message: `The user with the email ${result.email} has been created` })
}
