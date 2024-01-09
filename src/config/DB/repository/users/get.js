import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export default async () => {
    const users = await prisma.user.findMany()
    const updatedUsers = users.map(({ password, resetToken, ...user }) => { return user })
    return updatedUsers
}

