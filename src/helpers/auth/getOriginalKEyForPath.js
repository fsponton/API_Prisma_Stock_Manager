import { isNumber } from "../genericFunctions.js";

export default (path) => {

    console.log('PATH==>', path)


    const originalKeys = {
        login: ["email", "password"],
        logout: ["fullName", "email", "password"],
        reset_password: ["password"]
    }

    return Number(path) ? originalKeys['update'] : originalKeys[path.slice(1)];

}
