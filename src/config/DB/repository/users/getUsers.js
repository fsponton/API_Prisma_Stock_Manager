import { PrismaClient } from "@prisma/client"


const prisma = new PrismaClient()

export default async () => {
    const users = await prisma.user.findMany()
    const updatedUsers = users.map(({ password, resetToken, ...user }) => { return user })
    return updatedUsers
}







// const getUsers = async (_req: Request, res: Response) => {
//     const users = await prisma.user.findMany()
//     const updatedUsers = users.map(({ password, resetToken, ...user }) => { return user }) // Quito la prop password de cada objeto del array de usuarios
//     return res.status(200).json({ status: "success", users: updatedUsers })
// }
