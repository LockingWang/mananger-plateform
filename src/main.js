import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config';

import Button from 'primevue/button';

import { createPinia } from 'pinia'

import 'primevue/resources/themes/lara-light-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.component('Button', Button);

app.mount('#app')
