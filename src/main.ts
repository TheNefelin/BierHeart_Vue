import './assets/main.css'

import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import App from './App.vue'
import HomeView from './pages/HomeView.vue'
import HistoryView from './pages/HistoryView.vue'
import MediaView from './pages/MediaView.vue'
import StroreView from './pages/StroreView.vue'

// crear rutas
const routes = [
  { path: '/', component: HomeView },
  { path: '/history', component: HistoryView },
  { path: '/galery', component: MediaView },  
  { path: '/store', component: StroreView },    
]
// crear vue router
const router = createRouter({
  history: createMemoryHistory(),
  routes,
  scrollBehavior(){
    return { top: 0 };
  }
  // scrollBehavior(to, from, savedPosition) {
  //   if (savedPosition) {
  //     // Regresa a la posición guardada si existe
  //     return savedPosition;
  //   } else {
  //     // Desplazarse al inicio de la página para cada nueva navegación
  //     return { top: 0 };
  //   }
  // }
})

const app = createApp(App);
app.use(router)
app.mount('#app')
