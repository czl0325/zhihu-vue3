import axios from "axios";
import createToast from "@/hooks/CreateToast";

export const get = async (url: string, params?: object) => {
    const data = await axios.get(url, {
        data: params || {}
    })
    return executeData(data)
}

export const post = async (url: string, params?: object) => {
    const data = await axios.post(url, params || {})
    return executeData(data)
}

const executeData = (data) => {
    if (data.status === 200) {
        const result = data.data
        if (result.code === 0) {
            return Promise.resolve(result.data)
        } else {
            createToast(`错误: ${result.message}`, 'error')
        }
    } else {
        createToast(`错误: ${data.status}`, 'error')
    }
    return Promise.reject(data.data)
}

