import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { PASSWORD_TOKEN } from "../../../enviroments.js";

const prisma = new PrismaClient();

export default async ({ id, passwordHash }) => {

    const user = await prisma.user.findUnique({ where: { id } });

    if (!user) { throw new Error(`The user with ${id} dosen't exist`) }

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
        }
    }
    //this condition is when you reset from the dashboard
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
};