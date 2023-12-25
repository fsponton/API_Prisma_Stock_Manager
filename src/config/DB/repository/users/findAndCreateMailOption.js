
import { PrismaClient } from "@prisma/client"
import { PASSWORD_TOKEN } from "../../../enviroments.js";
import jwt from "jsonwebtoken"


const prisma = new PrismaClient()

export default async (emailFromRequest) => {
    let verificationLink

    const user = await prisma.user.findUnique({ where: { email: emailFromRequest } })

    if (!user) { throw new Error(`The user with ${id} dosen't exist`) }

    const token = jwt.sign({ id: user?.id }, `${PASSWORD_TOKEN}`, { expiresIn: '10m' })

    verificationLink = `http://localhost:5173/reset_password/${token}` //link front end donde el user pone la pw y hace la request al back para resetear
    await prisma.user.update({
        where: { id: user?.id },
        data: { resetToken: token }
    })

    const slug = verificationLink.replaceAll('.', '/')
    const mailOption = {
        email: emailFromRequest,
        slug
    }
    return mailOption;
}