<template>
  <div
    id="card"
    class="block shadow-allround bg-gray-100 overflow-hidden rounded-lg w-56"
  >
    <div id="thumbnail-card">
      <img
        src="../assets/card-thumbnail.jpg"
        class="overflow-hidden block "
        alt="Thumbnail"
      />
    </div>
    <div id="content" class="px-2 py-4">
      <h1 class="font-bold text-xl">Going to Mountain</h1>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    // function parseImg(img) {
    //   return require("../assets/" + img);
    // }
  }
};
</script>

<style></style>
