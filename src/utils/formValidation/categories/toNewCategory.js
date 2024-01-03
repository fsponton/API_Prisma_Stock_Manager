import { isBoolean } from "../../../helpers/genericFunctions.js";
import { parseToString } from "../../../helpers/users/users.js"

const toNewCategory = ({ name, available }) => {

    const newEntry = {
        name: parseToString(name),
        available: isBoolean(available)
    }

    return newEntry
}

export { toNewCategory };