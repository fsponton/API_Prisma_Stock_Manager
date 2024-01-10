import { PrismaClient } from "@prisma/client";
import BaseService from "../../config/DB/baseServices.js";
import { DatabaseError, NotFoundError } from "../../utils/errors/index.js";

const prisma = new PrismaClient();

class CategoryService extends BaseService {
    constructor(modelName) {
        super(modelName);
    }

    async disableCategory(id) {
        try {

            const existingRecord = await prisma[this.modelName].findUnique({
                where: { id },
            });

            if (!existingRecord) {
                throw new NotFoundError(`No ${this.modelName} found with ID: ${id}`, 404);
            }

            return await prisma[this.modelName].update({
                where: {
                    id
                },
                data: {
                    available: false
                }
            });
        } catch (error) {
            throw new DatabaseError(`Error disabling category: ${error.message}`);
        }
    }
}

export default CategoryService;