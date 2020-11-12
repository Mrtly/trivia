<template>
  <div id="app">
    <router-view />
  </div>
</template>

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
