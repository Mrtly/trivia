<template>
  <div id="game">
    <div>
      <h3>{{currentQuestion}}</h3>
      <div v-for="(answer, i) in options" :key="i" class="btns">
        <button v-on:click="handleAnswer" :disabled="!isActive">{{answer}}</button>
      </div>
    </div>
    <div id="alert">
      <!--alert box populated with answer feedback-->
    </div>
    <br />
    <div id="gamebar">
      <p>
        round:
        <b>{{round}}</b>
      </p>
      <p>
        score:
        <b>{{score}}/10</b>
      </p>
    </div>
    <br />
    <button id="exitbtn" v-on:click="gameOff()">Exit</button>
  </div>
</template>

<script>
import store from "@/store/index.js";
export default {
  name: "Game",
  store,
  mounted: function() {
    this.gameOn();
  },
  data() {
    return {
      isActive: true //will turn false on button click to disable buttons
    };
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
    round() {
      return this.$store.state.round;
    },
    score() {
      return this.$store.state.score;
    },
    our10questions() {
      let questionsData = this.data;
      //shuffle the questions with fisher yates algorithm
      for (let i = questionsData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = questionsData[i];
        questionsData[i] = questionsData[j];
        questionsData[j] = temp;
      }
      let our10qs = [];
      //put 10 questions into the array
      for (let i = 0; i <= 9; i++) {
        our10qs.push(questionsData[i]);
      }
      return our10qs;
    },
    options() {
      let currentAs = []; //put all options into 1 array
      //could this be done with a loop? yes, probably
      //would it save lines of code? no :)
      currentAs.push(this.our10questions[this.round - 1].incorrect[0]);
      currentAs.push(this.our10questions[this.round - 1].incorrect[1]);
      //this is because one of the answers has 2 incorrects, not 3
      if (this.our10questions[this.round - 1].incorrect[2]) {
        currentAs.push(this.our10questions[this.round - 1].incorrect[2]);
      }
      currentAs.push(this.our10questions[this.round - 1].correct);
      //shuffle it with fisher yates algorithm
      for (let i = currentAs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = currentAs[i];
        currentAs[i] = currentAs[j];
        currentAs[j] = temp;
      }
      return currentAs;
    },
    currentQuestion() {
      return this.our10questions[this.round - 1].question;
    },
    winner() {
      return this.our10questions[this.round - 1].correct;
    }
  },
  methods: {
    gameOn() {
      this.$store.state.score = 0; //resetting for a fresh start
      this.$store.state.round = 1; //same^
      store.commit("startGame");
      // console.log("game : " + this.$store.state.gameOn); //for peace of mind
      return this.$store.state.gameOn;
    },
    gameOff() {
      store.commit("endGame");
      // console.log("game : " + this.$store.state.gameOn); //for peace of mind
      this.$router.push({ path: "/gameover" });
      return this.$store.state.gameOn;
    },
    handleAnswer(e) {
      this.isActive = false;
      let alertBox = document.getElementById("alert");
      if (e.target.innerHTML == this.winner) {
        alertBox.innerHTML =
          "<p>correct! 🥳 it is: <b>" + this.winner + "</b></p>";
        store.commit("scoreUp");
      } else {
        alertBox.innerHTML =
          "<p>nope! 🧐 the correct answer is: <b>" + this.winner + "</b></p>";
      }
      setTimeout(() => this.nextRound(), 2000);
    },
    nextRound() {
      this.isActive = true;
      let alertBox = document.getElementById("alert");
      alertBox.innerHTML = ""; //nada!
      if (this.round < 10) {
        store.commit("increment");
      } else {
        this.gameOff(); //takes you to game over view
      }
    }
  }
};
</script>

<style scoped lang="scss">
#gamebar {
  border-top: 1px solid;
  p {
    display: inline-block;
    margin: 1em;
  }
}

#alert {
  margin-top: 1em;
  height: 2em; //fixed even if empty
  font-size: 1.3em;
}

.btns {
  button {
    cursor: pointer;
    margin: 0.5em;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 22px;
    width: 80%;
  }
}

#exitbtn {
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: none;
  padding: 0.3em 1em;
}
</style>
