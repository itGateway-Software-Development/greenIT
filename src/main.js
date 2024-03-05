import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/css/style.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import AOS from 'aos'
import 'aos/dist/aos.css'

const vuetify = createVuetify({
    components,
    directives,
})

AOS.init({
    delay: 50,
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: true
})


createApp(App).use(store).use(vuetify).use(router).use(ToastPlugin).mount('#app')