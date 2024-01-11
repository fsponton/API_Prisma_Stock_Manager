import { UserError } from "../utils/errors/index.js";

const isNumber = (key, value) => {
    if (typeof value !== 'number' || isNaN(value) || !isFinite(value)) {
        throw new UserError(`The value of Key: ${key} is not numeric`)
    }
    return value;
}

const isBoolean = (key, value) => {
    if (typeof value !== 'boolean') {
        throw new UserError(`The value of Key: ${key} is not boolean`);
    }
    return value;
}

const isValidRole = (value) => {
    const validRoles = ['USER', 'ADMIN'];
    if (!validRoles.includes(value.toUpperCase())) { throw new UserError('The role is not valid') }
    return value.toUpperCase();
}

const handleNullable = (value, defaultValue = null) => {
    return value !== null ? value : defaultValue;
};

const isString = (string) => {
    return typeof string === 'string' && value !== null
}

const parseToString = (value) => {
    if (!isString(value)) {
        throw new UserError(`Bad Request: The value is: ${value} or missing`, 400)
    }
    return value;
}


export {
    isNumber,
    isBoolean,
    isValidRole,
    handleNullable,
    parseToString
}