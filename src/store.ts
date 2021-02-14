import {createStore} from 'vuex'
import {UserProps} from "@/model/model";

export interface GlobalStoreProps {
    user: UserProps,
    loading: boolean
}

const store = createStore<GlobalStoreProps>({
    state: {
        user: {},
        loading: false
    },
    mutations: {
        updateUser(state, user) {
            state.user = user
        },
        setLoading(state, status) {
            state.loading = status
        }
    }
})


export default store;
