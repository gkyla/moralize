<template>
  <div
    id="card"
    class="rounded-md overflow-hidden shadow-allround hover:shadow-xl transition-all my-2 bg-white relative"
  >
    <div
      id="placeholder-content-button"
      class="bg-white bg-opacity-80 absolute top-0 right-0 bottom-0 left-0 z-40"
    >
      <div
        class="text-center w-full h-full flex justify-center items-center flex-col "
      >
        <h1
          class="text-md sm:text-lg text-white bg-gray-600 font-bold p-2 px-3 rounded-lg"
        >
          Start your first diary
        </h1>
        <button
          class="text-white mt-5 font-bold p-2 px-6 bg-gray-600 rounded-full"
          @click="openTheModal"
        >
          <font-awesome-icon icon="plus-circle" class="mr-2" /> Add
        </button>
      </div>
    </div>
    <div id="placeholder-content">
      <div id="thumbnail-card" class="w-full relative  ">
        <div
          id="location"
          class="absolute bottom-2 left-2 flex items-center button-options rounded-full px-2 bg-gray-200 opacity-70"
        >
          <font-awesome-icon icon="map-marker-alt" class="mr-2" />
          <p>Jakarta</p>
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
        <h1 class="font-bold text-lg md:text-2xl truncate">Camping Story</h1>
        <p class="text-md py-2 truncate"></p>
      </div>
      <div
        id="card-info"
        class="border-t px-2 py-2 flex items-center justify-center text-gray-400 "
      >
        <div id="info-label">
          <span class="text-sm ">#Camping</span>
        </div>
        <div id="info-date" class="ml-auto">
          <span class="ml-2 text-sm ">12 Jan 2019</span>
        </div>
      </div>
    </div>
  </div>

  <teleport to="#modal">
    <transition name="fade" mode="out-in">
      <diary-modal-handler
        v-if="openDiaryModal"
        :isOpened="openDiaryModal"
        @updateStatus="updateStatus"
      />
    </transition>
  </teleport>
</template>

<script>
import { ref } from "vue";
import DiaryModalHandler from "./DiaryModalHandler.vue";

export default {
  components: {
    DiaryModalHandler
  },
  setup() {
    const openDiaryModal = ref(false);

    function updateStatus(val) {
      openDiaryModal.value = val;
    }

    function openTheModal() {
      openDiaryModal.value = true;
    }

    return { openDiaryModal, updateStatus, openTheModal };
  }
};
</script>

<style></style>
