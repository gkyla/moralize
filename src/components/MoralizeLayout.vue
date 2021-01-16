<template>
  <div id="template-wrapper" class="flex flex-column  md:flex-row overflow-hidden">
    <slot name="navbar"></slot>

    <main id="main" class="fixed top-0 md:static w-full h-full pb-20 md:pb-0 overflow-y-auto ">
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
