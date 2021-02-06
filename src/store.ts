import {createStore} from 'vuex'

const store = createStore({
    state: {
        user: {isLogin: false},
        loading: false
    },
    mutations: {
        updateUser(state, user) {
            state.user = { ...state.user, ...user }
        },
        setLoading(state, status) {
            state.loading = status
        }
    }
})


export default store;
