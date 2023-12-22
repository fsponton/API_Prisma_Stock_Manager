import saveRegistration from "../../config/DB/repository/users/saveRegistration.js";

const registerUser = async (req, res) => {
    const { newUserEntry } = req

    const result = await saveRegistration(newUserEntry)
    console.log('resultRegistration', result)
    return res.status(200).json({ status: "Success", message: `The user with the email ${result.email} has been created` })
}

export default registerUser;