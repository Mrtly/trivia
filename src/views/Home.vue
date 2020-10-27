<template>
  <div class="home">
    <router-link to="/game">
      <button>play a trivia game with 10 questions</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
button {
  cursor: pointer;
  margin: 0.5em;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 22px;
  padding: 0.5em 1em;
}
</style>
