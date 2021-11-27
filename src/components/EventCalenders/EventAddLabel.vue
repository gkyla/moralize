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
        <h1 class="text-2xl font-bold">Event Editor</h1>
        <button
          @click.stop="closeModal"
          class="ml-auto bg-gray-600 text-white px-3 py-1 rounded-lg"
        >
          <font-awesome-icon class="text-2xl" icon="times" />
        </button>
      </div>
      <div id="inner-modal" class="p-4 w-full h-full">
        <form @submit.prevent="addLabel" class="rounded-md flex flex-col">
          <h1>add Label bosq</h1>
          <label for="labelInput"></label>
          <input
            type="text"
            name="labelInput"
            id="labelInput"
            v-model="labelInput"
            placeholder="wow bro"
          />
          <button type="submit">Submit bro</button>
        </form>
        <!-- <div class="flex">awww</div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { nanoid } from "nanoid";

export default {
  setup() {
    const store = useStore();

    // muncul pas pengen nambah event
    // this.currentClickedEvent = {
    //   id: nanoid(),
    //   title: "wow",
    //   start: arg.startStr,
    //   end: arg.endStr,
    // };

    const labelInput = ref("");
    const currentClickedEvent = computed(
      () => store.state.calenderEvent.currentClickedEvent
    );

    function closeModal() {
      store.commit("display/setModalStatus", {
        type: "label",
        status: false,
      });
    }

    function addLabel() {
      const obj = {
        id: nanoid(),
        title: labelInput.value,
        start: currentClickedEvent.value.startStr,
        end: currentClickedEvent.value.endStr,
      };

      store.commit("calenderEvent/addLabelEvent", obj);
      console.log("addLabel function clicked");
    }

    return { addLabel, labelInput, closeModal };
  },
};
</script>

<style></style>
