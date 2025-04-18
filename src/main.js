import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import axios from 'axios'

const app = createApp(App)

const a = 1
const b = 2
console.log(a === b)


axios
  .get('/user?ID=12345')
  .then(function (response) {
    // handle success

    console.log(response)
  })
  .catch(function (error) {
    // handle error
    console.log(error)
  })
  .finally(function () {
    // always executed
  })

app.use(createPinia())
app.use(router)

app.mount('#app')
