import { parseToString } from "../../../helpers/users/users.js"
import { UserError } from "../../errors/index.js";

const toNewCategory = ({ name, available = true }) => {

    if (!name || name.trim() === "") {
        throw new UserError(": The name of new category can't be empty or null", 400);
    }

    const newEntry = {
        name: parseToString('name', name),
        available
    }

    return newEntry
}

export { toNewCategory };