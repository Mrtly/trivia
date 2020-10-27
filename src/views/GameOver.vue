<template>
  <div>
    <h1>that's all 😎</h1>
    <h3>you scored {{this.$store.state.score}} correct out of 10 questions, yay!</h3>

    <router-link to="/">
      <button>Home</button>
    </router-link>
  </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "GameOver",
  store
};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  border: none;
  padding: 0.3em 1em;
}
</style>