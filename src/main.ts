import './assets/main.css'

import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomeView from './pages/HomeView.vue'
import HistoryView from './pages/HistoryView.vue'

// crear rutas
const routes = [
  { path: '/', component: HomeView },  
  { path: '/history', component: HistoryView },  
]
// crear vue router
const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

const app = createApp(App);
app.use(router)
app.mount('#app')
