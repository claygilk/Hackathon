import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Scoreboard from '../views/Scoreboard.vue'
import Play from '../views/Play.vue'

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/Scoreboard',
    name: 'Scoreboard',
    component: Scoreboard
  },
  {
    path: '/Play',
    name: 'Play',
    component: Play
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
