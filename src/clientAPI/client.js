import {getImageResponse, postImageResponse} from "../apiStubs/imageStubs"

export const getImages = async () => {
    const result = getImageResponse()

    return result
        ? result
        : new Error('Invalid image response data')
}

export const postImages = (FormData) => {
    return new Promise((resolve, reject) => {
        const result = postImageResponse()

        return result 
            ? resolve(result) 
            : reject(new Error('Invalid image response data'))
    });
}
