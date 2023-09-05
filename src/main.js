// Boostrap modules
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
// boostrap icons
import "bootstrap-icons/font/bootstrap-icons.css";

import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import global from '@/global'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mixin(global);

app.mount('#app')
