import { createMemoryHistory, createRouter } from 'vue-router'

// import HomeView from './HomeView.vue'
import About from './../data/users/sections/About.vue'

const routes = [
//   { path: '/', component: HomeView },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;