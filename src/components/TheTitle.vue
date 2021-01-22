<template>
  <div id="title">
    <h1 class="title-heading bg-gray-800">
      {{ title }}
      <div class="box-atention-color inline-block px-5 py-2 ml-2 rounded-lg">
        {{ amount }}
      </div>
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    amount: Number
  }
};
</script>

<style></style>
