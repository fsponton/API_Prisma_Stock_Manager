import authentication from "../../config/DB/repository/users/authentication.js";

const loginUser = async (req, res) => {
    const { loginData } = req
    const result = await authentication(loginData)
    return res.status(200).json({ status: "Success", message: `Hi ${result.email} you are logged`, result })
}

export default loginUser;