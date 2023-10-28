import './assets/main.css'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { toast, updateGlobalOptions } from "vue3-toastify";

updateGlobalOptions({
  autoClose: 1500,
  position: toast.POSITION.TOP_CENTER
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
