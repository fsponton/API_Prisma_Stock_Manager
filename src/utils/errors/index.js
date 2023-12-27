export class UserError extends Error {
    constructor(message, code = 404) {
        super(message);
        this.name = 'UserError'
        this.code = code;
    }
}

export class TokenError extends Error {
    constructor(message, code = 401) {
        super(message);
        this.name = 'tokenError'
        this.code = code;
    }
}


export class KeysError extends Error {
    constructor(message, code = 400) {
        super(message);
        this.name = 'KeysError'
        this.code = code;
    }
}