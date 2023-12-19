import { KeysError } from "../../../utils/errors/index.js"


const loginKeysValidator = (arrRequest) => {

    const originalKeys = ["email", "password"]

    const stringKeys = arrRequest.join(", ")

    // check keys quantity keys
    if (arrRequest.length !== originalKeys.length) { throw new KeysError(`The keys provided: ${stringKeys} in req.body are not valid.`, 400) }

    const sortedArray1 = arrRequest.sort()
    const sortedArray2 = originalKeys.sort()

    // compare values of arrays
    for (let i = 0; i < sortedArray1.length; i++) {
        if (sortedArray1[i] !== sortedArray2[i]) {
            throw new KeysError(`The keys provided: ${stringKeys} in req.body are not valid. `, 400)
        }
    }

    return

}

export default loginKeysValidator;