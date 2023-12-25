import nodemailer from "nodemailer"

import {
    user_nodemailer,
    password_nodemailer
} from "./enviroments.js";

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: user_nodemailer,
        pass: password_nodemailer
    },
});


