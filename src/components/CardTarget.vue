<template>
  <div
    id="card"
    class="rounded-lg overflow-hidden shadow-allround hover:shadow-xl transition-all my-2 p-2 bg-white"
  >
    <div id="thumbnail-card" class="w-full relative">
      <div
        class="target-color h-36 max-h-36 flex justify-center items-center rounded-lg"
        v-if="!done"
      >
        <h1 class="bg-white opacity-60 py-2 px-5 rounded-full mt-5">
          On Progress ...
        </h1>
      </div>

      <img
        v-if="done"
        src="../assets/card-thumbnail.jpg"
        class="overflow-hidden block h-36 max-h-36 w-full object-center object-cover rounded-lg"
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
    <div id="content" class="px-2 py-4 flex flex-col">
      <h1 class="font-bold text-lg md:text-2xl truncate">Working</h1>
      <p class="text-md py-2 truncate">
        Bro
      </p>
      <button
        class="ml-auto  py-2 px-5 rounded-full  font-bold"
        :class="[done ? 'box-atention-color' : 'target-color']"
      >
        {{ done ? "Finished" : "Verify" }}
      </button>
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
