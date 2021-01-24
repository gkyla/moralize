<template>
  <div
    id="template-wrapper"
    class="flex flex-col-reverse w-full h-screen md:flex-row "
  >
    <slot name="navbar"></slot>

    <main id="main" class="w-full h-full overflow-y-auto max-screen-main">
      <slot name="main"></slot>

      <add-button-handler class="hidden md:block fixed bottom-3 right-10" />
    </main>
  </div>
</template>

<script>
import AddButtonHandler from "./AddButtonHandler.vue";
export default {
  components: {
    AddButtonHandler
  }
};
</script>

<style scoped>
#main {
  background-image: url(../assets/wave.svg);
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
