import dotenv from 'dotenv'
dotenv.config()

export const {
    DATABASE_URL,
    PORT,
    PASSWORD_TOKEN,
    user_nodemailer,
    password_nodemailer
} = process.env

