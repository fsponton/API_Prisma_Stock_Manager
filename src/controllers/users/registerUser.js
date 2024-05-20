import BaseService from "../../config/DB/baseServices.js"
import bcrypt from "bcryptjs"

const baseService = new BaseService('User')

export default async (req, res) => {
    const { fullName, email, password } = req.newUserEntry

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt)

    const result = await baseService.create({ fullName, email, password: passwordHash })
    return res.status(200)
        .send({ error: false, message: `The user with the email ${result.email} has been created` })
}
