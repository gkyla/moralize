<template>
  <div id="button">
    <button
      class="nav-link md:bg-gray-600 md:text-white md:hover:bg-gray-400"
      @click="modalOpen = !modalOpen"
    >
      <font-awesome-icon class="text-2xl" icon="plus-circle" />
    </button>
    <teleport to="#modal">
      <div
        id="modal-box"
        class="fixed flex items-center justify-center z-50 top-0 left-0 bottom-0 right-0 bg-gray-400 bg-opacity-50 transition-all"
        v-if="modalOpen"
      >
        <div
          id="modal-content"
          class="relative flex px-5 items-center flex-col  bg-white h-full w-screen md:max-w-lg md:m-4 md:h-auto p-14 shadow-lg sm:rounded-xl  overflow-hidden"
        >
          <button
            class="nav-link absolute top-2 bg-gray-600 text-white hover:bg-gray-400 right-2"
            @click="modalOpen = false"
          >
            <font-awesome-icon class="text-2xl text-white" icon="times" />
          </button>
          <div
            id="modal-info"
            class="mt-2 w-full justify-center flex flex-col  max-h-full"
          >
            <button
              id="add-diary"
              class="button-handler  box-atention-color"
              @click="(modalOpen = false), (openDiaryModal = true)"
            >
              <h1 class="font-bold text-lg md:text-2xl">
                <font-awesome-icon icon="book-open" class="mr-5" />
                Write Diary Note
              </h1>
              <p class="pt-3 md:text-md">
                write down all the things you want to express , you can add
                pictures, labels and much more
              </p>
            </button>
            <button id="add-target" class="button-handler  box-atention-color">
              <h1 class="font-bold text-lg md:text-2xl">
                <font-awesome-icon icon="sticky-note" class="mr-5" />
                Set Target
              </h1>
              <p class="pt-3 md:text-md">
                Set your target, but you have to confirm if you want to mark
                this target as complete, your integrity is tested
              </p>
            </button>
          </div>
        </div>
      </div>

      <diary-modal-handler
        v-if="openDiaryModal"
        :isOpened="openDiaryModal"
        @updateStatus="updateStatus"
      />
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
import DiaryModalHandler from "./DiaryModalHandler.vue";

export default {
  components: {
    DiaryModalHandler
  },
  setup() {
    const modalOpen = ref(false);
    const openDiaryModal = ref(false);

    function updateStatus(val) {
      openDiaryModal.value = val;
    }

    return {
      modalOpen,
      openDiaryModal,
      updateStatus
    };
  }
};
</script>

<style>
.ck-editor__editable_inline {
  border-radius: 0 0 10px 10px !important;
  min-height: 300px;
}

.ck-toolbar {
  border-radius: 10px 10px 0 0 !important;
}

.cke_chrome {
  border-radius: 8px;
}
</style>
