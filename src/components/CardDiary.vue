<template>
  <div
    id="card"
    class="card-diary-style shadow-allround hover:shadow-xl transition-all my-2"
    :data-type="diary.type"
    :data-id="diary.id"
    @click="openModalWithData"
  >
    <div id="thumbnail-card" class="w-full">
      <img
        :src="diary.assets || defaultImg"
        class="overflow-hidden block h-36 max-h-36 w-full object-center object-cover"
        alt="Thumbnail"
      />
    </div>
    <div id="content" class="px-2 py-4">
      <h1 class="font-bold text-lg md:text-2xl truncate">{{ diary.title }}</h1>
      <p class="text-md py-2 truncate">
        {{ parseContent }}
      </p>
    </div>
    <div
      id="card-info"
      class="border-t px-2 py-2 flex items-center justify-center text-gray-400"
    >
      <div id="info-label">
        <span class="text-sm ">#{{ diary.tag }}</span>
      </div>
      <div id="info-date" class="ml-auto">
        <span class="ml-2 text-sm ">{{ diary.createdOn }}</span>
      </div>
    </div>
  </div>

  <teleport to="#modal">
    <diary-modal-handler
      v-if="modalOpened"
      :isOpened="modalOpened"
      :id="diary.id"
      :type="diary.type"
      @updateStatus="updateStatus"
    />
  </teleport>
</template>

<script>
import { computed, ref } from "vue";
import DiaryModalHandler from "./DiaryModalHandler.vue";
// import moralizeDb from "../data/idb.js";
// import CONFIG from "../settings/config.js";

export default {
  components: {
    DiaryModalHandler
  },
  props: {
    diary: Object
  },
  setup(props) {
    const modalOpened = ref(false);
    const defaultImg = computed(() => require("@/assets/card-thumbnail.jpg"));

    function updateStatus(val) {
      modalOpened.value = val;
    }

    async function openModalWithData() {
      // Open Modal
      modalOpened.value = true;
    }

    const parseContent = computed(() =>
      props.diary.content.replace(/<\/?[^>]+(>|$)/g, "")
    );
    return {
      openModalWithData,
      modalOpened,
      defaultImg,
      updateStatus,
      parseContent
    };
  }
};
</script>

<style>
.card-diary-style {
  @apply inline-block flex-shrink-0 overflow-hidden bg-white rounded-xl w-44 md:w-56 mr-5 ml-1 cursor-pointer;
}
</style>
