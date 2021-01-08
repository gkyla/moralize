<template>
  <div
    id="home"
    class="w-full h-full text-left p-5 sm:p-8 lg:p-12 overflow-y-auto "
  >
    <div id="group-top" class="xl:flex xl:gap-5 ">
      <div id="group-1" class="flex-grow">
        <div
          id="welcome"
          class="block nav-color p-5 shadow-md mb-5 rounded-md "
        >
          <h1 class="font-bold text-2xl md:text-4xl mb-2">
            Good Morning, {{ user.userName }}
          </h1>
          <span>{{ greetings }}</span>
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
    <div id="recent-diary" class="my-5">
      <h1 class="font-bold text-xl mb-3 lg:md-5">Recent Diary</h1>
      <thumbnail-card></thumbnail-card>
    </div>
    <div id="recent-target" class="my-5">
      <h1 class="font-bold text-xl mb-3 lg:md-5">Recent Target</h1>
      <thumbnail-card></thumbnail-card>
    </div>
  </div>
</template>

<script>
import ThumbnailCard from "../components/ThumbnailCard.vue";

import { computed, ref } from "vue";
import { useStore } from "vuex";
import * as moment from "moment";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    ThumbnailCard
  },

  setup() {
    const store = useStore();
    const user = computed(() => store.state.user);

    const greetings = ref(null);
    greetings.value = moment().format("MMMM Do YYYY, h:mm:ss a");

    return {
      user,
      greetings
    };
  }
};
</script>
