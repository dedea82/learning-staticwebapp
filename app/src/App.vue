<template>
  <div id="app">
    <div>
      <router-link to="/">
        <img alt="logo" height="82px" src="./assets/logo.png">
      </router-link>
      <h1>Welcome to Learning SWA App (on staging branch!)</h1>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 32px;
}
</style>
