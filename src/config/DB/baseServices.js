import { PrismaClient } from "@prisma/client";
import { NotFoundError, DatabaseError } from "../../utils/errors/index.js";

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
            const result = await prisma[this.modelName].findUnique({
                where: { id },
            });
            if (!result) { throw new NotFoundError(`The ${this.modelName} with ID: ${id} doesn't exist`, 404) }
            return result
        } catch (error) {
            throw new DatabaseError(`Error retrieving ${this.modelName}: ${error.message}`);
        }
    }

    async findAll() {
        try {
            return await prisma[this.modelName].findMany();
        } catch (error) {
            throw new DatabaseError(`Error retrieving ${this.modelName}s: ${error.message}`);
        }
    }

    async update(id, data) {
        try {
            return await prisma[this.modelName].update({
                where: { id },
                data,
            });
        } catch (error) {
            throw new NotFoundError(`Error updating ${this.modelName}: ${error.message}`, 404);
        }
    }

    async delete(id) {
        try {

            const existingRecord = await prisma[this.modelName].findUnique({
                where: { id },
            });

            if (!existingRecord) {
                throw new NotFoundError(`No ${this.modelName} found with ID: ${id}`, 404);
            }

            return await prisma[this.modelName].delete({
                where: { id },
            });
        } catch (err) {
            throw new DatabaseError(`Error deleting ${this.modelName}: ${err.message}`, err.code);
        }
    }
}

export default BaseService;