<template>
  <div
    id="home"
    class="w-full h-full text-left p-3 sm:p-5 lg:p-7 overflow-y-auto "
  >
    <div id="group-top" class="xl:flex xl:gap-5 ">
      <div
        id="welcome"
        class="flex items-center nav-color p-5 shadow-md rounded-md w-full xl:w-1/3"
      >
        <div class="w-full h-full">
          <h1 class="font-bold text-xl sm:text-2xl md:text-4xl mb-2">
            Good Morning, {{ user.userName }}
          </h1>
          <span class="text-sm sm:text-lg">
            {{ greetings ? greetings : "Setting up time .." }}</span
          >
        </div>
      </div>
      <div id="group-2" class="flex-grow my-4 xl:my-0 shadow-md ">
        <div class="box-atention-color h-full rounded-md p-5 text-left">
          <h1 id="user-data" class="font-bold text-xl lg:text-2xl">Info</h1>
          <div
            id="count-collection"
            class="flex items-center justify-evenly shadow-lg bg-gray-100 py-1 lg:py-3 rounded-lg mt-2"
          >
            <div
              id="count-diary"
              class="flex flex-col p-2 text-2xl items-center"
            >
              <p>{{ diaryState.allDiary.length }}</p>
              <font-awesome-icon icon="book-open" />
              <p class="text-sm mt-1">Diary</p>
            </div>
            <div
              id="count-diary"
              class="flex flex-col p-2 text-2xl items-center"
            >
              <p>0</p>
              <font-awesome-icon icon="sticky-note" />
              <p class="text-sm mt-1">Target</p>
            </div>
            <div
              id="count-trophy"
              class="flex flex-col p-2 text-2xl items-center"
            >
              <p>0</p>
              <font-awesome-icon icon="calendar-plus" />
              <p class="text-sm mt-1">Event</p>
            </div>
          </div>
          <!-- Recent Achievement Maybe -->
          <h1 id="user-data" class="font-bold text-xl lg:text-2xl mt-4">
            Recent Achievement
          </h1>
        </div>
      </div>
    </div>
    <item-container name="Recent Diary">
      <div v-if="diaryState.loading">Loading up data ..</div>
      <card-diary
        v-else
        v-for="diary in diaryState.allDiary"
        :diary="diary"
        :key="diary.id"
      />
    </item-container>
    <item-container name="Recent Target">
      <card-target></card-target>
      <card-target></card-target>
    </item-container>
    <item-container name="Finished Target">
      <card-target :done="true"></card-target>
    </item-container>
  </div>
</template>

<script>
import CardDiary from "../components/CardDiary.vue";
import CardTarget from "../components/CardTarget.vue";
import itemContainer from "../components/ItemContainer.vue";

import { computed, ref } from "vue";
import { useStore } from "vuex";
import moment from "moment";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    CardDiary,
    CardTarget,
    itemContainer
  },

  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    const diaryState = ref(store.state.diary);
    // const pinState = computed(() => store.state.pin);

    const greetings = ref(null);

    // Update every second
    setInterval(
      () => (greetings.value = moment().format("MMMM Do YYYY, hh:mm:ss A")),
      1000
    );

    return {
      user,
      greetings,
      // pinState
      diaryState
    };
  }
};
</script>
