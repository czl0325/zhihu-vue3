import axios from "axios";


export const get = async (url: string, params?: object) => {
    const data = await axios.get(url, {
        params: params || {}
    })

    return data
}

export const post = (url: string, params?: object) => {
    return axios.post(url, params || {})
}

