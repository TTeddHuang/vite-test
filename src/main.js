import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import MyModal from './components/MyModal.vue'


const app = createApp(App)

app.component('MyModal',MyModal)


app.use(createPinia())
app.use(router)

app.mount('#app')
