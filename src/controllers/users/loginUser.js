import UserService from "../../config/DB/userServices.js"

const userService = new UserService('User')

export default async (req, res) => {
    const { email, password } = req.loginData
    const result = await userService.authentication({ email, password })
    return res.status(200)
        .header({ token: result.token })
        .send({ error: false, message: `Hi ${result.email} you are logged` })
}

