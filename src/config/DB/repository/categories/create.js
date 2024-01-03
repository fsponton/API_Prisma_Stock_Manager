import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async ({ name, available }) => {


    const category = await prisma.category.create({
        data:
        {
            name,
            available
        }
    })

    return category

}
