<template>
  <moralize-layout>
    <template #navbar>
      <TheNavbar logo="logo.png" />
    </template>

    <template #main>
      <router-view />
    </template>
  </moralize-layout>
</template>

<script>
import MoralizeLayout from "./components/MoralizeLayout.vue";
import TheNavbar from "./components/TheNavbar.vue";

export default {
  components: {
    MoralizeLayout,
    TheNavbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap");

body,
html {
  width: 100%;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Noto Sans", sans-serif;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
