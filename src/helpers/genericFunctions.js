import { UserError } from "../utils/errors/index.js";

const canBeNulls = ['description', 'sector', 'rack', 'square_meter', 'size', 'weight',]

const isNumber = (key, value) => {

    if (canBeNulls.includes(key)) { return null }

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

const isString = (value) => {
    return typeof value === 'string' && value !== null
}

const parseToString = (key, value) => {

    if (canBeNulls.includes(key)) { return value }

    if (!isString(value) || value.length < 3) {
        throw new UserError(`Bad Request: The value on key: ${key} is not valid or missing. The value should have at least 3 characters.`, 400)
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