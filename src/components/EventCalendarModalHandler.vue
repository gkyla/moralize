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
    @click.stop="closeModal"
  >
    <div class="bg-white text-center p-56 shadow-md relative z-50" @click.stop>
      <h1 class="text-2xl">test</h1>
      <h1 class="text-2xl">{{ eventObj.event.title }}</h1>
      <button @click.stop="closeModal">Close</button>
      <button @click.stop="deleteEvent">Delete Label Event</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
// import { toRefs } from '@vue/reactivity';

export default {
  props: {
    eventObj: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    const modalIsOpened = ref(true);
    const store = useStore();

    function closeModal() {
      modalIsOpened.value = false;
      emit("modalStatus", modalIsOpened.value);
    }

    function deleteEvent() {
      store.commit("calenderEvent/deleteEvent", {
        eventObj: props.eventObj,
      });

      modalIsOpened.value = false;
      emit("modalStatus", modalIsOpened.value);
    }

    return { closeModal, deleteEvent };
  },
};
</script>

<style></style>
