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
            userName: 'czl',
            email: '295183917@qq.com'
        }
    }
})

Mock.mock(RegExp('/user/get'), 'get', (params) => {
    console.log(params)
    const { id } = JSON.parse(params.body)
    console.log('获取到的id=', id)
    return {
        code: 0,
        message: '成功',
        data: {
            id: 1,
            userName: 'czl',
            email: '295183917@qq.com'
        }
    }
})

Mock.mock(RegExp('^/column/list'), 'get', () => {
    return {
        code: 0,
        message: '成功',
        data: require('./column.json')
    }
})

Mock.mock('/column/articles', 'get', () => {
    return {
        code: 0,
        message: '成功',
        data: require('./articles.json')
    }
})

Mock.mock('/column/author', 'get', () => {
    return {
        code: 0,
        message: '成功',
        data: require('./author.json')
    }
})

Mock.mock('/detail', 'get', ()=>{
    return {
        code: 0,
        message: '成功',
        data: require('./detail.json')
    }
})
