import dotenv from 'dotenv'
dotenv.config()

// export const {
//     DATABASE_URL,
//     PORT,
//     user_nodemailer,
//     password_nodemailer
// } = process.env


const environments = {
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: process.env.PORT,
    user_nodemailer: process.env.user_nodemailer,
    password_nodemailer: process.env.password_nodemailer
};

export default environments;