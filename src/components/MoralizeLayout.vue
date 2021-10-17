<template>
  <div
    id="template-wrapper"
    class="flex flex-col-reverse w-full h-screen md:flex-row"
  >
    <slot name="navbar"></slot>
    <!-- Currently only planning to show on the mobile only -->
    <div
      class="
        fixed
        top-0
        left-0
        right-0
        z-10
        shadow-md
        nav-color
        flex
        justify-between
        items-center
        px-2
        md:hidden
      "
    >
      <div class="font-bold text-xl">Moralize</div>
      <router-link to="/pined" class="nav-link font-bold">
        <font-awesome-icon class="text-2xl" icon="thumbtack" />
        <p class="ml-5">Pined</p>
      </router-link>
    </div>
    <main
      id="main"
      class="w-full h-full overflow-y-auto max-screen-main mt-16 md:mt-0"
    >
      <slot name="main"></slot>

      <add-button-handler class="hidden md:block fixed bottom-3 right-10" />
    </main>
  </div>
</template>

<script>
import AddButtonHandler from "./AddButtonHandler.vue";
export default {
  components: {
    AddButtonHandler,
  },
};
</script>

<style scoped>
#main {
  background-image: url(../assets/wave.svg);
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
