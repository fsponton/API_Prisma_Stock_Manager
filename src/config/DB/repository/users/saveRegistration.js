import bcrypt from "bcryptjs"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async ({ full_name, email, password }) => {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt)


    const user = await prisma.user.create({
        data:
        {
            full_name,
            email,
            password: hash
        }
    })

    return user

}
