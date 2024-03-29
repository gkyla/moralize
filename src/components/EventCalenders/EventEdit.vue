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
        <form @submit.prevent="updateEvent" class="rounded-md">
          <div id="input-group">
            <div>
              <p class="ml-2">-- Title</p>
              <input
                type="text"
                class="w-full border-2 rounded-md p-2"
                v-model="editableEvent.title"
              />
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-2">
              <div>
                <p class="ml-2">-- Start</p>

                <input
                  type="date"
                  class="w-full border-2 rounded-md p-2"
                  v-model="editableEvent.start"
                />
              </div>
              <div>
                <p class="ml-2">-- End</p>
                <input
                  type="date"
                  class="w-full border-2 rounded-md p-2"
                  v-model="editableEvent.end"
                />
              </div>
            </div>
          </div>
        </form>

        <div class="flex">
          <button
            @click.stop="deleteEvent"
            class="
              ml-auto
              box-atention-color
              px-4
              py-1
              rounded-lg
              mt-5
              mr-2
              hover:bg-red-500
              transition-all
            "
          >
            Remove
          </button>
          <button
            type="submit"
            class="box-atention-color px-4 py-1 rounded-lg mt-5"
            @click.stop="updateEvent"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";
import { getUniqueEvent } from "../../utils";

export default {
  setup() {
    // Need to wrap all of this with onMounted maybe ? ....
    // so it can handle the select method

    const store = useStore();
    const eventsData = computed(() => store.state.calenderEvent.events);
    const currentClickedEvent = computed(
      () => store.state.calenderEvent.currentClickedEvent
    );

    console.log("eventsData state", eventsData.value);

    const copyEventObjProps = computed(() =>
      eventsData.value.find((_event) =>
        getUniqueEvent(_event, currentClickedEvent.value)
      )
    );
    const currentIndexOnTheArray = computed(() =>
      eventsData.value.findIndex((_event) =>
        getUniqueEvent(_event, currentClickedEvent.value)
      )
    );

    const editableEvent = reactive({
      title: copyEventObjProps.value.title,
      start: copyEventObjProps.value.start,
      end: copyEventObjProps.value.end,
    });

    function closeModal() {
      store.commit("display/setModalStatus", {
        type: "edit",
        status: false,
      });
    }

    function updateEvent() {
      store.commit("calenderEvent/updateLabelEventWithNewTitleDate", {
        oldValue: { ...eventsData.value[currentIndexOnTheArray.value] },
        newValue: { ...editableEvent },
      });

      console.log("updated");
    }

    function deleteEvent() {
      store.commit("calenderEvent/deleteLabelEvent", {
        eventObj: currentClickedEvent.value,
      });

      // close the modal after event deleted
      store.commit("display/setModalStatus", {
        type: "edit",
        status: false,
      });
    }

    return { closeModal, deleteEvent, editableEvent, updateEvent };
  },
};
</script>

<style scoped>
.modal-width-height {
  min-height: 400px;
  min-width: 400px;
}
</style>
