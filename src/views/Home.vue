<template>
  <div
    id="home"
    class="w-full m-auto max-h-screen text-left p-3 sm:p-5 lg:py-7 lg:px-14 overflow-y-auto "
  >
    <div id="group-top" class="xl:flex xl:gap-5 ">
      <div
        id="welcome"
        class="flex items-center nav-color p-5 shadow-md rounded-md w-full xl:w-1/3"
      >
        <div class="w-full h-full">
          <h1 class="font-bold text-xl sm:text-2xl md:text-4xl mb-2">
            Good Morning
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
        </div>
      </div>
    </div>

    <div
      class="grid grid-cols-1 xl:grid-cols-2 gap-5 shadow-md bg-white rounded-xl bg-opacity-70 lg:p-5 lg:my-8"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 grid-rows-2  gap-4 col-span-1"
      >
        <div
          name="Recent Diary"
          class=" rounded-xl mt-5 grid grid-cols-1 gap-4 col-span-2 "
        >
          <h1 class="font-bold text-lg">Your Recent Diary</h1>
          <div class="grid grid-cols-1  xsm:grid-cols-2 gap-5">
            <div v-if="diaryState.loading">Loading up data ..</div>
            <div v-else-if="isDiaryEmpty">
              <placeholder-card></placeholder-card>
            </div>
            <card-diary
              v-else
              v-for="diary in getFirstTwoLast(diaryState.allDiary)"
              :diary="diary"
              :key="diary.id"
              :customClass="['grid-diary-item']"
            />
          </div>
        </div>
        <div class=" col-span-2">
          <div>
            <h1 class="font-bold text-lg mb-5 ">Most Active Diary</h1>
            <card-diary
              v-if="!diaryState.loading && !isDiaryEmpty"
              :diary="diaryState.allDiary[diaryState.allDiary.length - 1]"
              :customClass="['grid-diary-item']"
            />
            <placeholder-card v-if="isDiaryEmpty"></placeholder-card>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center ">
        <div class="bg-white shadow-xl p-10">
          <h1
            class="font-bold text-center my-5 text-xl py-3 px-5 rounded-full box-atention-color text-gray-600"
          >
            Diary Stats
          </h1>
          <p class="stats-information">
            First Time Created On :
            <span class="stats-value"> 12 Januari 2020</span>
          </p>
          <p class="stats-information">
            Total Of pined Diary : <span class="stats-value"> 10 </span>
          </p>
          <p class="stats-information">
            Recent Created : 20 June 2021
          </p>
          <p class="stats-information">Total Diary : 40</p>
          <p class="stats-information">
            Total of Various Location : 11 Location
          </p>
          <p class="stats-information">Total of tag : 13 Tag</p>
        </div>
      </div>
    </div>

    <!-- Target -->
    <div
      class="grid grid-cols-1 xl:grid-cols-2 gap-5 shadow-md bg-white rounded-xl bg-opacity-70 lg:p-5 lg:my-8"
    >
      <div
        class="grid grid-cols-1 lg:grid-cols-2 grid-rows-2  gap-4 col-span-1"
      >
        <div class=" rounded-xl mt-5 grid grid-cols-1 gap-4 col-span-2 ">
          <h1 class="font-bold text-lg">Your Recent Target</h1>
          <div class="grid grid-cols-1  xsm:grid-cols-2 gap-5">
            <div v-if="diaryState.loading">Loading up data ..</div>
            <div v-else-if="isDiaryEmpty">
              <placeholder-card></placeholder-card>
            </div>
            <card-diary
              v-else
              v-for="diary in getFirstTwoLast(diaryState.allDiary)"
              :diary="diary"
              :key="diary.id"
              :customClass="['grid-diary-item']"
            />
          </div>
        </div>
        <div class=" col-span-2">
          <div>
            <h1 class="font-bold text-lg mb-5 ">Most Active Diary</h1>
            <card-diary
              v-if="!diaryState.loading && !isDiaryEmpty"
              :diary="diaryState.allDiary[diaryState.allDiary.length - 1]"
              :customClass="['grid-diary-item']"
            />
            <placeholder-card v-if="isDiaryEmpty"></placeholder-card>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center ">
        <div class="bg-white shadow-xl p-10">
          <h1
            class="font-bold text-center my-5 text-xl py-3 px-5 rounded-full box-atention-color text-gray-600"
          >
            Target Stats
          </h1>
          <p class="stats-information">
            First Time Created On :
            <span class="stats-value"> 12 Januari 2020</span>
          </p>
          <p class="stats-information">
            Total Target : <span class="stats-value"> 10 </span>
          </p>
          <p class="stats-information">
            Recent Created : 20 June 2021
          </p>
          <p class="stats-information">Total Finished Target : 40</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardDiary from "../components/CardDiary.vue";
// import CardTarget from "../components/CardTarget.vue";
import PlaceholderCard from "../components/PlaceholderCard.vue";
// import itemContainer from "../components/ItemContainer.vue";

import { computed, ref } from "vue";
import { useStore } from "vuex";
import moment from "moment";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    CardDiary,
    // CardTarget,
    PlaceholderCard
    // itemContainer
  },

  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);
    // const diaryState = ref(store.state.diary);
    const diaryState = computed(() => store.state.diary);
    // const pinState = computed(() => store.state.pin);

    const isDiaryEmpty = computed(() => {
      if (store.state.diary.allDiary.length === 0) {
        return true;
      } else {
        return false;
      }
    });

    function getFirstTwoLast(theArray) {
      const last = theArray.length - 1;
      const beforeLast = theArray.length - 2;

      if (theArray.length >= 2) {
        return [theArray[last], theArray[beforeLast]];
      } else {
        return [theArray[last]];
      }
    }

    const greetings = ref(null);

    // Update every second
    setInterval(
      () => (greetings.value = moment().format("MMMM Do YYYY, hh:mm:ss A")),
      1000
    );

    return {
      user,
      greetings,
      getFirstTwoLast,
      // pinState
      isDiaryEmpty,
      diaryState
    };
  }
};
</script>
