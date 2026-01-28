import { createApp } from 'vue'
import { motion } from 'motion-v'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).component('motion', motion).mount('#app')
