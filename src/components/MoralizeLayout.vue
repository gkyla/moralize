<template>
  <div id="template-wrapper" class="flex">
    <slot name="navbar"></slot>

    <main class="w-full h-screen pb-20">
      <slot name="main"></slot>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
