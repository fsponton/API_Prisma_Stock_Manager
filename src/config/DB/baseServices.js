import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class BaseService {
    constructor(modelName) {
        this.modelName = modelName;
    }

    async create(data) {
        try {
            return await prisma[this.modelName].create({
                data,
            });
        } catch (error) {
            throw new Error(`Error creating ${this.modelName}: ${error.message}`);
        }
    }

    async findById(id) {
        try {
            return await prisma[this.modelName].findUnique({
                where: { id },
            });
        } catch (error) {
            throw new Error(`Error retrieving ${this.modelName}: ${error.message}`);
        }
    }

    async findAll() {
        try {
            return await prisma[this.modelName].findMany();
        } catch (error) {
            throw new Error(`Error retrieving ${this.modelName}s: ${error.message}`);
        }
    }

    async update(id, data) {
        try {
            return await prisma[this.modelName].update({
                where: { id },
                data,
            });
        } catch (error) {
            throw new Error(`Error updating ${this.modelName}: ${error.message}`);
        }
    }

    async delete(id) {
        try {

            const existingRecord = await prisma[this.modelName].findUnique({
                where: { id },
            });

            if (!existingRecord) {
                throw new Error(`No ${this.modelName} found with ID: ${id}`, 500);
            }

            return await prisma[this.modelName].delete({
                where: { id },
            });
        } catch (err) {
            throw new Error(`Error deleting ${this.modelName}: ${err.message}`, 500);
        }
    }
}

export default BaseService;