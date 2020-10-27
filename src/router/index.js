import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Game from "@/views/Game.vue"
import GameOver from "@/views/GameOver.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/game',
    name: 'game',
    component: Game
  },
  {
    path: '/gameover',
    name: 'gameover',
    component: GameOver
  }
]

const router = new VueRouter({
  routes
})

export default router
