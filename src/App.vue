<template>
  <moralize-layout>
    <template #navbar>
      <TheNavbar logo="logo.png" />
    </template>

    <template #main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component"></component>
        </transition>
      </router-view>
    </template>
  </moralize-layout>
</template>

<script>
import { useStore } from "vuex";
import MoralizeLayout from "./components/MoralizeLayout.vue";
import TheNavbar from "./components/TheNavbar.vue";

export default {
  components: {
    MoralizeLayout,
    TheNavbar
  },
  setup() {
    const store = useStore();
    store.dispatch("diary/getAllDiary");
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

/* @import url("https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Dosis:wght@400;500;600&display=swap");

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

body,
html {
  width: 100%;
  height: 100vh;
}

#modal {
  /* font-family: "Noto Sans", sans-serif; */
  font-family: "Dosis", sans-serif;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* font-family: "Noto Sans", sans-serif; */
  font-family: "Dosis", sans-serif;
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
