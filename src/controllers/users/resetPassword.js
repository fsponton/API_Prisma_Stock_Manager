import UserService from "../../config/DB/userServices.js";

const userService = new UserService('User')

export default async (req, res) => {
    const { token, newPassword } = req

    const user = await userService.findAndResetPassword({ id: token.id, password: newPassword })

    // if (!user) { return res.status(404).send({ status: "error", msg: "Time expired" }) }
    return res.status(200).send({ status: "Success", message: `${user.email}, the password has been updated` })
};

