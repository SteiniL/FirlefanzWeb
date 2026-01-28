import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../HomeView.vue'
import AgbView from '../AgbView.vue'
import ImprintView from '../ImprintView.vue'
import PrivacyView from '../PrivacyView.vue'
import ContactView from '../ContactView.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomeView },
        { path: '/agb', component: AgbView },
        { path: '/imprint', component: ImprintView },
        { path: '/privacy', component: PrivacyView },
        { path: '/contact', component: ContactView },
    ],
})
