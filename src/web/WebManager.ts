import { get, post } from './Request'

export const login = (userName: string, password: string) => {
    return post('/user/login', {
        userName,
        password
    })
}

export const register = (userName: string, email: string, password1: string, password2: string) => {
    return post('/user/login', {
        userName,
        email,
        password1,
        password2
    })
}

export const getUserById = (id: number) => {
    return get('/user/get', {
        id
    })
}

export const getColumnList = () => {
    return get(`/column/list`, { id: 1})
}
