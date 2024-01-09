import UserService from "../../config/DB/userServices.js"

const userService = new UserService('User')

export default async (req, res) => {
    const { loginData } = req
    const result = await userService.authentication(loginData)
    return res.status(200)
        .header({ token: result.token })
        .send({ status: "Success", message: `Hi ${result.email} you are logged` })
}

