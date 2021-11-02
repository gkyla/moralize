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
      <h1 class="text-2xl">{{ editableEvent.title }}</h1>

      <form
        @submit.prevent="updateEvent"
        class="border border-black border-b-2"
      >
        <input type="text" v-model="editableEvent.title" />
      </form>

      <button @click.stop="closeModal">Close</button>
      <button @click.stop="deleteEvent">Delete Label Event</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed, onUnmounted } from "vue";
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
    const eventsData = computed(() => store.state.calenderEvent.events);

    const copyEventObjProps = computed(() =>
      eventsData.value.find(
        (_event) =>
          _event.id == props.eventObj.event.id &&
          _event.title == props.eventObj.event.title
      )
    );
    const currentIndexOnTheArray = computed(() =>
      eventsData.value.findIndex(
        (_event) =>
          _event.id == props.eventObj.event.id &&
          _event.title == props.eventObj.event.title
      )
    );

    const editableEvent = reactive({
      title: copyEventObjProps.value.title,
      start: copyEventObjProps.value.start,
      end: copyEventObjProps.value.end,
    });

    function closeModal() {
      modalIsOpened.value = false;
      emit("modalStatus", modalIsOpened.value);
    }

    function updateEvent() {
      eventsData.value[currentIndexOnTheArray.value] = {
        ...eventsData.value[currentIndexOnTheArray.value],
        title: editableEvent.title,
      };
    }

    function deleteEvent() {
      store.commit("calenderEvent/deleteEvent", {
        eventObj: props.eventObj,
      });

      modalIsOpened.value = false;
      emit("modalStatus", modalIsOpened.value);
    }

    onUnmounted(() => {
      editableEvent.value = props.eventObj;
    });

    return { closeModal, deleteEvent, editableEvent, updateEvent };
  },
};
</script>

<style></style>
