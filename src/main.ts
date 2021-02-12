import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import axios from "axios";


axios.interceptors.request.use(config => {
    return config
})
axios.interceptors.response.use(config => {
    return config
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
