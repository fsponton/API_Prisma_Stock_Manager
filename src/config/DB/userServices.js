import { PrismaClient } from "@prisma/client";
import BaseService from "../../config/DB/baseServices.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { PASSWORD_TOKEN } from "../enviroments.js";


const prisma = new PrismaClient();

class UserService extends BaseService {
    constructor(modelName) {
        super(modelName);
    }

    async authentication({ email, password }) {
        try {
            const user = await prisma.user.findUnique({ where: { email } });

            if (!user) {
                throw new UserError('User not found', 404);
            }

            const encryptedPassword = await bcrypt.compare(password, user.password);

            if (!encryptedPassword) {
                throw new UserError('Invalid email or password', 401);
            }

            const userForToken = {
                id: user.id,
                full_name: user.full_name,
                email: user.email,
                role: user.role,
                active: user.active
            };

            const token = jwt.sign(userForToken, `${PASSWORD_TOKEN}`, { expiresIn: 60 * 60 });

            return { ...userForToken, token };
        } catch (error) {
            throw new Error('Internal Error', 500);
        }
    }
}

export default UserService;