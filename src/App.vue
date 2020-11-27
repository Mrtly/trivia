<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
let ROOT_PATH = "https://vue-trivia.vercel.app";
export default {
  name: "app",
  data() {
    return {
      screenshot: ROOT_PATH + require("./assets/screenshot.png")
    };
  },
  metaInfo() {
    return {
      meta: [
        { property: "og:title", content: "Trivia" },
        { property: "og:image", content: this.screenshot },
        {
          property: "og:description",
          content: "a trivia game built with Vue"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 20px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(118, 185, 155);
  background: linear-gradient(
    0deg,
    rgb(79, 151, 167) 0%,
    rgba(162, 213, 190, 1) 100%
  );
}

body {
  margin: 0;
  padding: 0;
}
</style>
