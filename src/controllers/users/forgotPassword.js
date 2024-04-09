import { transporter } from "../../config/tansporter.js"
import { mailOptions } from "../../config/mailer.js"
import { isValidEmail } from "../../helpers/users/users.js";
import UserService from "../../config/DB/userServices.js";

const userService = new UserService('User')

export default async (req, res) => {
    const { email } = req.body

    const emailEntry = isValidEmail(email)

    const mailOption = await userService.findAndCreateMailOption({ email: emailEntry })

    transporter.sendMail(mailOptions(mailOption.email, mailOption.slug), (err) => {
        if (err) { return process.exit(1); }
    })
    return res.status(200).send({ error: false, msg: `An email link has been sent to:  ${mailOption.email}` })

}
