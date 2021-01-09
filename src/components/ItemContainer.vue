<template>
  <div class="inline-block w-full my-5  overflow-x-auto  ">
    <h1 class="font-bold text-xl mb-3 lg:md-5">{{ name }}</h1>
    <div class="flex w-full py-4 overflow-x-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String
  }
};
</script>

<style></style>
