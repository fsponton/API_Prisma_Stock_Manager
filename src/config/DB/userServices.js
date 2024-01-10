import { PrismaClient } from "@prisma/client";
import BaseService from "../../config/DB/baseServices.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { PASSWORD_TOKEN } from "../enviroments.js";
import { UserError } from "../../utils/errors/index.js";
import { TokenError } from "../../utils/errors/index.js";

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


    async findAndCreateMailOption({ email }) {
        try {
            let verificationLink

            const user = await prisma.user.findUnique({ where: { email } })

            if (!user) { throw new Error(`The user with ${id} dosen't exist`) }

            const token = jwt.sign({ id: user?.id }, `${PASSWORD_TOKEN}`, { expiresIn: '10m' })

            verificationLink = `http://localhost:5173/reset_password/${token}` //link front end donde el user pone la pw y hace la request al back para resetear
            await prisma.user.update({
                where: { id: user?.id },
                data: { resetToken: token }
            })

            const slug = verificationLink.replaceAll('.', '/')
            const mailOption = {
                email,
                slug
            }
            return mailOption;
        } catch (error) {
            throw new Error(`Error in reset password process: ${error.message}`);
        }
    }

    async findAndResetPassword({ id, password }) {
        try {
            const user = await prisma.user.findUnique({ where: { id } });

            if (!user) { throw new Error(`The user with ${id} dosen't exist`) }

            const salt = bcrypt.genSaltSync(10);
            const passwordHash = bcrypt.hashSync(password, salt)

            //The first condition to reset the password is when the forgot password is requested by entering the email 
            if (user?.resetToken) {
                const decode = jwt.decode(user.resetToken, { complete: true, key: PASSWORD_TOKEN });

                const date = new Date();
                const expires = new Date(decode.payload.exp * 1000);

                if (date < expires) {
                    await prisma.user.update({
                        where: {
                            id,
                        },
                        data: {
                            password: passwordHash,
                            resetToken: null,
                        },
                    });
                    return user;
                } else {
                    throw new TokenError('token_expired')
                }
            }
            //TEST - this condition is when you reset from the dashboard // 
            else {
                await prisma.user.update({
                    where: {
                        id,
                    },
                    data: {
                        password: passwordHash
                    }
                });
                return user;
            }
        } catch (error) {
            throw new Error(`Error resetting password: ${error.message}`);
        }
    }
}

export default UserService;