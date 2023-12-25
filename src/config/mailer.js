import {
    user_nodemailer,
} from "./enviroments.js";

export const mailOptions = (email, verificationLink) => {
    return {
        from: user_nodemailer,
        to: email,
        subject: "Reset password",
        html: ` <!DOCTYPE html >
            <html lang="en">
            <head>
                <meta charset = "UTF-8">
        <meta http - equiv="X-UA-Compatible" content = "IE=edge">
            <meta name="viewport" content = "width=device-width, initial-scale=1.0">
                <style>
                </style>
                </head>
                <body>
                <div>
                <h1>Email Confirmation </h1>
                    <h2> Hello ${email} </h2>
                        <p> You have 10 minutes and a try the following link, to change password:</p>
                            <a href=${verificationLink}>Click here</a>
        <p>prisma manager user app.</p>
        </div>
        </body>    
        </html>`
    }
}
