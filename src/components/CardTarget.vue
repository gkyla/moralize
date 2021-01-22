<template>
  <div
    id="card"
    class=" shadow-allround hover:shadow-xl transition-all my-2 bg-white"
  >
    <div id="thumbnail-card" class="w-full relative  ">
      <div
        id="location"
        class="absolute bottom-2 left-2 flex items-center button-options rounded-full px-2 bg-gray-200 opacity-70"
      >
        <font-awesome-icon icon="map-marker-alt" class="mr-2" />
        <p>ASAS</p>
      </div>
      <img
        src="../assets/card-thumbnail.jpg"
        class="overflow-hidden block h-36 max-h-36 w-full object-center object-cover"
        alt="Thumbnail"
      />
      <div id="card-options" class="absolute top-2 right-0">
        <button id="pin" class="button-option">
          <font-awesome-icon icon="thumbtack" />
        </button>
        <button id="pin" class="button-option">
          <font-awesome-icon icon="trash" />
        </button>
      </div>
    </div>
    <div id="content" class="px-2 py-4 ">
      <h1 class="font-bold text-lg md:text-2xl truncate">Working</h1>
      <p class="text-md py-2 truncate">
        Bro
      </p>
    </div>
    <div
      id="card-info"
      class="border-t px-2 py-2 flex items-center justify-center text-gray-400 "
    >
      <div id="info-label">
        <span class="text-sm ">#Workhard</span>
      </div>
      <div id="info-date" class="ml-auto">
        <span class="ml-2 text-sm ">12 Januari 2019</span>
      </div>
    </div>
  </div>
</template>

<script>
// Bikin status untuk ngasih tau kalo udah selesai

export default {
  props: {
    done: Boolean
  },
  setup() {
    // function parseImg(img) {
    //   return require("../assets/" + img);
    // }
  }
};
</script>

<style></style>
