import { PrismaClient } from "@prisma/client";
import BaseService from "../../config/DB/baseServices.js";
import { DatabaseError, NotFoundError, UserError } from "../../utils/errors/index.js";

const prisma = new PrismaClient();


class ProductService extends BaseService {
    constructor(modelName) {
        super(modelName);
    }

    async create(data) {
        const { id_creator } = data


    }

}
export default ProductService