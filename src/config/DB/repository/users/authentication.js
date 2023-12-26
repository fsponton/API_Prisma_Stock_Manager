import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { UserError } from "../../../../utils/errors/index.js"
import { PrismaClient } from "@prisma/client"
import { PASSWORD_TOKEN } from "../../../enviroments.js"

const prisma = new PrismaClient()

export default async ({ email, password }) => {

    const user = await prisma.user.findUnique({ where: { email } })

    const encryptedPassword = user === null ? false
        : await bcrypt.compare(password, user.password)

    if (!(user && encryptedPassword)) { throw new UserError('Email o password incorrta', 401) }

    const userForToken = {
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
        active: user.active
    }

    const token = jwt.sign(userForToken, `${PASSWORD_TOKEN}`, { expiresIn: 60 * 60 })

    return ({ ...userForToken, token })

}
