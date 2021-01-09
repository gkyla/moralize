<template>
  <div
    id="home"
    class="w-full h-full text-left p-3 sm:p-5 lg:p-7 overflow-y-auto "
  >
    <div id="group-top" class="xl:flex xl:gap-5 ">
      <div id="group-1" class="flex-grow">
        <div
          id="welcome"
          class="block nav-color p-5 shadow-md mb-5 rounded-md "
        >
          <h1 class="font-bold text-lg sm:text-2xl md:text-4xl mb-2">
            Good Morning, {{ user.userName }}
          </h1>
          <span class="text-sm sm:text-lg">
            {{ greetings ? greetings : "Setting up time .." }}</span
          >
        </div>
        <div id="pinned">
          <h1 class="font-bold text-xl mb-3 lg:md-5">Pinned Things</h1>
          <div
            id="pinned-content"
            class="p-20 shadow-allround nav-color rounded-lg"
          ></div>
        </div>
      </div>
      <div id="group-2" class="flex-grow my-4 xl:my-0 shadow-md">
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
              <p>0</p>
              <font-awesome-icon icon="book-open" />
            </div>
            <div
              id="count-diary"
              class="flex flex-col p-2 text-2xl items-center"
            >
              <p>0</p>
              <font-awesome-icon icon="sticky-note" />
            </div>
            <div
              id="count-trophy"
              class="flex flex-col p-2 text-2xl items-center"
            >
              <p>0</p>
              <font-awesome-icon icon="trophy" />
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
      <card-diary></card-diary>
      <card-diary></card-diary>
      <card-diary></card-diary>
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
    const greetings = ref(null);

    function onSwiper(swiper) {
      console.log(swiper);
    }

    function onSlideChange() {
      console.log("keganti");
    }

    // Update every second
    setInterval(
      () => (greetings.value = moment().format("MMMM Do YYYY, hh:mm:ss A")),
      1000
    );

    return {
      user,
      greetings,
      onSwiper,
      onSlideChange
    };
  }
};
</script>
