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

const handleNullable = (value, defaultVal = null) => {
    return value !== null ? value : defaultVal;
};

const isString = (string) => {
    return typeof string === 'string'
}

const parseToString = (valueFromRequest) => {
    if (!isString(valueFromRequest)) {
        throw new UserError(`Bad Request: The value is: ${valueFromRequest} or missing`, 400)
    }
    return valueFromRequest
}


export {
    isNumber,
    isBoolean,
    isValidRole,
    handleNullable,
    parseToString
}