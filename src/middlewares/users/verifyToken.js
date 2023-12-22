import jwt from "jsonwebtoken"
import { TokenError } from "../../utils/errors/index.js"
import { PASSWORD_TOKEN } from "../../config/enviroments.js"

//middleware for extracting token
export default (req, _res, next) => {
    const authorization = req.get('Authorization')
    let token = ''

    if (authorization && authorization.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
    } else { throw new TokenError("Invalid authorization", 401) }

    const decodedToken = jwt.decode(token, `${PASSWORD_TOKEN}`)

    if (!token || !decodedToken) {
        throw new TokenError('Token missing or invalid', 401)
    }

    next()
}