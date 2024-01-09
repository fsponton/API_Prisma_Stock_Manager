import { PrismaClient } from "@prisma/client";
import BaseService from "../../config/DB/baseServices.js";

const prisma = new PrismaClient();

class CategoryService extends BaseService {
    constructor(modelName) {
        super(modelName);
    }

    async disableCategory(categoryId) {
        try {
            return await prisma[this.modelName].update({
                where: {
                    id: categoryId
                },
                data: {
                    available: false
                }
            });
        } catch (error) {
            throw new Error(`Error disabling category: ${error.message}`);
        }
    }
}

export default CategoryService;