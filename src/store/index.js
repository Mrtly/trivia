import Vue from 'vue'
import Vuex from 'vuex'
import jsonData from "@/assets/QsData.json";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: jsonData,
    gameOn: false, // true when game starts
    round: 1, // round counter linked to display of current question
    score: 0
  },
  mutations: {
    startGame(state) {
      state.gameOn = true
    },
    endGame(state) {
      state.gameOn = false
    },
    increment(state) {
      state.round++
    },
    scoreUp(state) {
      state.score++
    }
  },
  getters: {
    round: state => {
      return state.round;
    }
  },
})
