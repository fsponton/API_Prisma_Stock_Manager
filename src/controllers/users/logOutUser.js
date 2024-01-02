import jwt from "jsonwebtoken"
import { PASSWORD_TOKEN } from "../../config/enviroments.js"

export default async (req, res) => {
    const { token } = req

    delete token.exp

    const result = jwt.sign(token, `${PASSWORD_TOKEN}`, { expiresIn: 0 })

    //el token que envio esta vencido y reemplaza el que estataba en el navegador, o puede borrarse tambien en el navegador para cerrar el logout.
    return res.status(200)
        .header({ token: result.token })
        .send({ status: "Success", message: `Hi ${token.email} you are logged out` })
}

