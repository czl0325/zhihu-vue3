// @ts-ignore
import Mock from 'mockjs'

Mock.mock('/user/register', 'post', (params: { body: string }) => {
    const { userName, email, password1, password2 } = JSON.parse(params.body)
    const result = { code: 0, message: '成功', data: {} }
    if (password1 !== password2) {
        result.code = 100
        result.message = '两次输入的密码不一致'
        return result
    }
    result.data = {
        userName,
        email
    }
    return result
})

Mock.mock('/user/login', 'post', () => {
    return {
        code: 0,
        message: '成功',
        data: {
            id: 1,
            nickName: 'czl',
            email: '295183917@qq.com'
        }
    }
})

Mock.mock('/column/list', 'get', () => {
    return {
        code: 0,
        message: '成功',
        data: require('./column.json')
    }
})