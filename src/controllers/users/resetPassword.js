import bcrypt from "bcryptjs"
import findAndResetPassword from "../../config/DB/repository/users/findAndResetPassword.js";



export default async (req, res) => {
    const { token, newPassword } = req

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(newPassword, salt)

    const user = await findAndResetPassword({ id: token.id, passwordHash: hash })

    if (!user) { return res.status(404).send({ status: "error", msg: "Time expired" }) }
    return res.status(200).send({ status: "success", msg: `${user.email}, tu password ha sido actualizada` })
};

