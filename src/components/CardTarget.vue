<template>
  <div
    id="card"
    class="relative block flex-shrink-0 mr-7 shadow-allround border-3 bg-white rounded-lg w-56 my-2 ml-1"
  >
    <div id="content" class="px-2 py-4 relative">
      <div
        id="status"
        class="inline-block p-2 bg-white rounded-2xl border-4 absolute -top-5 -right-3"
        :class="[done ? 'border-green-300' : 'border-red-400']"
      >
        <font-awesome-icon
          :icon="done ? 'check' : 'percent'"
          class="border-3 border-white  "
        />
      </div>
      <div id="target-title" class="mb-5">
        <h1 class="font-bold text-md">Finishing Home Work</h1>
      </div>
      <div id="target-content-inner">
        <h1 class=" text-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
          officia!
        </h1>
      </div>
      <div id="target-content-created" class="mt-2">
        <h1 class="text-sm font-bold">
          {{ done ? "Finished" : "12-05-2015" }}
        </h1>
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
