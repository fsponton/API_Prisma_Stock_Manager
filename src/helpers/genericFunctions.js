import { UserError } from "../utils/errors/index.js";

const isNumber = (value) => {
    return typeof value === 'number' && isFinite(value);
}

const isBoolean = (value) => {
    if (typeof value !== 'boolean') {
        throw new UserError('The value is not a boolean');
    }
    return value
}

const isValidRole = (value) => {
    const validRoles = ['USER', 'ADMIN'];
    if (!validRoles.includes(value.toUpperCase())) { throw new UserError('The role is not valid') }
    return value.toUpperCase()
}

export {
    isNumber,
    isBoolean,
    isValidRole
}