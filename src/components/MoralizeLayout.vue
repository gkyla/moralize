<template>
  <div id="template-wrapper" class="flex overflow-hidden">
    <slot name="navbar"></slot>

    <main id="main" class="w-full h-screen pb-20 lg:pb-0 overflow-y-auto">
      <slot name="main"></slot>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#main {
  background-image: url(../assets/wave.svg);
  background-repeat: no-repeat;
  background-position: bottom;
}
</style>
