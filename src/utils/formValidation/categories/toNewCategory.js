import { isBoolean } from "../../../helpers/genericFunctions.js";
import { parseToString } from "../../../helpers/users/users.js"

const toNewCategory = ({ name, available = true }) => {

    const newEntry = {
        name: parseToString(name),
        available
    }

    return newEntry
}

export { toNewCategory };