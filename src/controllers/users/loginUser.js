import authentication from "./../../config/DB/repository/users/authentication.js"

export default async (req, res) => {
    const { loginData } = req
    const result = await authentication(loginData)
    return res.status(200)
        .header({ token: result.token })
        .send({ status: "Success", message: `Hi ${result.email} you are logged` })
}

