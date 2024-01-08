import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async () => {
    const categories = await prisma.category.findMany()
    return categories
}
