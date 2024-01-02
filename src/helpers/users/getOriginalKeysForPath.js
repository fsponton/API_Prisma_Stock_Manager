import { isNumber } from "../genericFunctions.js";

export default (path) => {

    const originalKeys = {
        login: ["email", "password"],
        register_user: ["full_name", "email", "password"],
        reset_password: ["password"],
        update: ["full_name", "email", "role", "active"],
        delete: ["id"]
    }

    return Number(isNumber(path)) ? originalKeys['update'] : originalKeys[path.slice(1)];

}