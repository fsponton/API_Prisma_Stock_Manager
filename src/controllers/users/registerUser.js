import { toNewUserEntry } from "../../utils/formValidation/users/toNewUserEntry.js";
import saveRegistration from "../../config/DB/repository/users/saveRegistration.js";

const registerUser = async (req, res) => {
    const { full_name, email, password } = req.body
    const newUserEntry = toNewUserEntry({ full_name, email, password })
    const result = await saveRegistration(newUserEntry)
    return res.status(200).json({ status: "Success", message: `The user with the email ${result.email} has been created` })
}

export default registerUser;