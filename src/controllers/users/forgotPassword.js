import { transporter } from "../../config/tansporter.js"
import { mailOptions } from "../../config/mailer.js"
import findAndCreateMailOption from "../../config/DB/repository/users/findAndCreateMailOption.js";
import { isValidEmail } from "../../helpers/users/users.js";


export default async (req, res) => {
    const { email } = req.body

    const userEmailEntry = isValidEmail(email)

    const mailOption = await findAndCreateMailOption(userEmailEntry)

    transporter.sendMail(mailOptions(mailOption.email, mailOption.slug), (err) => {
        if (err) { return process.exit(1); }
    })
    return res.status(200).send({ status: "Success", msg: `An email link has been sent to:  ${mailOption.email}` })

}
