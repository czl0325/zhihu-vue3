import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import './mock/mock'
import './css/reset.css'


const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
