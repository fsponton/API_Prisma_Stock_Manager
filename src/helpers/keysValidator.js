import { KeysError } from "../utils/errors/index.js"

const checkKeys = (originalKeys, keysFromRequest) => {

    const filteredKeysFromRequest = keysFromRequest.filter(key => originalKeys.includes(key));
    const errorKeys = originalKeys.filter(key => !filteredKeysFromRequest.includes(key));
    const missingKeys = keysFromRequest.filter(key => !originalKeys.includes(key));

    return { missingKeys, errorKeys };
}

const keysValidator = (keysFromRequest, originalKeys) => {

    const keys = checkKeys(keysFromRequest, originalKeys)

    const sortedKeysFromRequest = keysFromRequest.sort()
    const sortedOriginalKeys = originalKeys.sort()

    for (let i = 0; i < sortedOriginalKeys.length; i++) {
        if (sortedKeysFromRequest[i] !== sortedOriginalKeys[i]) {
            throw new KeysError(`This keys are not valid: ${keys.errorKeys ? keys.errorKeys.join(', ') : 'null'}, in req.body. The missing keys are: ${keys.missingKeys ? keys.missingKeys.join(', ') : ''}`, 400)
        }
    }

    return

}

export default keysValidator;