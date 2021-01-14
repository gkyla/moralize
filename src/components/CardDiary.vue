<template>
  <div
    id="card"
    class=" shadow-allround hover:shadow-xl transition-all my-2 "
    :class="[customClass ? customClass : '']"
    :data-type="diary.type"
    :data-id="diary.id"
    @click="openModalWithData"
  >
    <div id="thumbnail-card" class="w-full relative  ">
      <div
        id="location"
        class="absolute bottom-2 left-2 flex items-center button-options rounded-full px-2 bg-gray-200 opacity-80"
      >
        <font-awesome-icon icon="map-marker-alt" class="mr-2" />
        <p>{{ diary.location }}</p>
      </div>
      <img
        :src="diary.assets || defaultImg"
        class="overflow-hidden block h-36 max-h-36 w-full object-center object-cover"
        alt="Thumbnail"
      />
      <div id="card-options" class="absolute top-2 right-0">
        <button
          id="pin"
          class="button-option"
          :class="[isDiaryPined ? 'box-atention-color opacity-100' : '']"
          @click.stop="pinDiary()"
        >
          <font-awesome-icon icon="thumbtack" />
        </button>
        <button
          id="pin"
          class="button-option"
          @click.stop="removeTheDiary(diary.id)"
        >
          <font-awesome-icon icon="trash" />
        </button>
      </div>
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
import { useStore } from "vuex";

export default {
  components: {
    DiaryModalHandler
  },
  props: {
    diary: Object,
    customClass: Array
  },
  setup(props) {
    const store = useStore();
    const modalOpened = ref(false);
    const defaultImg = computed(() => require("@/assets/card-thumbnail.jpg"));
    const togglePinStatus = ref(false);

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

    const isDiaryPined = computed(() => props.diary.pin);

    function pinDiary() {
      store.dispatch("diary/pinDiary", props.diary.id);
    }

    function removeTheDiary(id) {
      store.dispatch("diary/removeTheDiary", id);
    }

    return {
      openModalWithData,
      modalOpened,
      removeTheDiary,
      pinDiary,
      defaultImg,
      updateStatus,
      parseContent,
      togglePinStatus,
      isDiaryPined
    };
  }
};
</script>

<style></style>
