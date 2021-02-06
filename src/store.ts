import {createStore} from 'vuex'

const store = createStore({
    state: {
        user: {isLogin: false}
    },
    mutations: {
        updateUser(state, user) {
            state.user = { ...state.user, ...user }
        }
    }
})


export default store;
