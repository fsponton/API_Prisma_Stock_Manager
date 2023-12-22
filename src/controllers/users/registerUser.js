import saveRegistration from "../../config/DB/repository/users/saveRegistration.js";

export default async (req, res) => {
    const { newUserEntry } = req
    const result = await saveRegistration(newUserEntry)
    return res.status(200)
        .send({ status: "Success", message: `The user with the email ${result.email} has been created` })
}
