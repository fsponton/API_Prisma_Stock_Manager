import { PrismaClient } from "@prisma/client"
import { NotFoundError } from "../../../../utils/errors/index.js"

const prisma = new PrismaClient()

export default async (categoryID) => {
    try {
        const category = await prisma.category.update({
            where: {
                id: categoryID
            },
            data: {
                available: false
            },
        })
        return category
    } catch (err) {
        throw new NotFoundError(`Category with ID ${categoryID} not found`);
    }

}
