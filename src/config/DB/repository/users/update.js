import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async ({ full_name, email, role, active, id }) => {

    const user = await prisma.user.update({
        where: {
            id,
        },
        data: {
            full_name,
            email,
            role,
            active
        },
    })

    return user

}
