import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store'
import axios from "axios";
import AV from 'leancloud-storage'

AV.init({
    appId: "c7asE56shF6CHnyR4IMlgt3T-gzGzoHsz",
    appKey: "nW6vFMo0HUY7LMRAvuHQI7Lr",
    serverURL: "https://c7ase56s.lc-cn-n1-npxfk.com"
});
AV.debug.enable();  

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
