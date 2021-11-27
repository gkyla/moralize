<template>
  <div
    class="
      w-full
      h-full
      fixed
      top-0
      right-0
      bottom-0
      left-0
      z-40
      flex
      justify-center
      items-center
    "
  >
    <div
      class="
        bg-white
        modal-width-height
        shadow-2xl
        relative
        z-50
        rounded-md
        overflow-hidden
      "
      @click.stop
    >
      <div
        id="top-modal"
        class="flex p-4 box-atention-color w-full items-center"
      >
        <h1 class="text-2xl font-bold">Choose your preferences</h1>

        <button
          @click.stop="closeModal"
          class="ml-auto bg-gray-600 text-white px-3 py-1 rounded-lg"
        >
          <font-awesome-icon class="text-2xl" icon="times" />
        </button>
      </div>
      <div id="inner-modal" class="p-4 w-full h-full">
        <div class="flex">
          <button class="mr-5" @click="titleModal">Add event title</button>
          <button>Add Agenda</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup(props, { emit }) {
    const store = useStore();

    function closeModal() {
      store.commit("display/setModalStatus", {
        type: "preferences",
        status: false
      });
    }

    function titleModal() {
      store.commit("display/setModalStatus", {
        type: "label",
        status: true,
        close: "preferences"
      });
    }

    return { closeModal, titleModal };
  }
};
</script>

<style></style>
