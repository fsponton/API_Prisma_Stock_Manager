import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async (idUserToDelete) => {

    const user = await prisma.user.delete({
        where: {
            id: idUserToDelete
        },
    })

    return user
}
