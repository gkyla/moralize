<template>
  <div class="container-page" id="about">
    <div id="option" class="grid grid-cols-1  lg:grid-cols-2 lg:gap-5">
      <search-bar @searchItems="searchItems"></search-bar>
      <div
        id="filterAndSort"
        class="w-full mt-3 lg:mt-0 flex items-center py-2  "
      >
        <div
          class="lg:ml-auto flex items-center justify-between  flex-wrap gap-2"
        >
          <div class="flex flex-col items-center">
            Sort By
            <select name="Sort By" class="custom-select">
              <option selected>Default </option>
            </select>
          </div>
          <div class="flex flex-col items-center">
            Mood
            <select
              name="mood"
              class="custom-select"
              v-model="selectValue.mood"
            >
              <option selected>Default</option>
              <option
                v-for="mood in filteredGettersOptions.mood"
                :value="mood"
                :key="mood"
              >
                {{ mood }}
              </option>
            </select>
          </div>
          <div class="flex flex-col items-center">
            Location
            <select
              name="location"
              class="custom-select"
              v-model="selectValue.location"
            >
              <option selected>Default </option>
              <option
                v-for="location in filteredGettersOptions.location"
                :value="location"
                :key="location"
              >
                {{ location }}
              </option>
            </select>
          </div>
          <div class="flex flex-col items-center">
            Tags
            <select name="tags" class="custom-select" v-model="selectValue.tag">
              <option selected>Default </option>
              <option
                v-for="tag in filteredGettersOptions.tag"
                :value="tag"
                :key="tag"
              >
                {{ tag }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <section
      id="list-diary"
      class=" bg-white rounded-xl bg-opacity-70 shadow-md lg:p-5 p-2 my-4 lg:my-8"
    >
      <the-title :title="defineTitle" :amount="defineTitleAmount"></the-title>
      <div class="mt-6 grid grid-cols-1 bsm:grid-cols-2 xl:grid-cols-3 gap-3">
        <div v-if="diaryState.loading">Loading up data ..</div>
        <card-diary
          v-else
          v-for="diary in getDiary"
          :key="diary.id"
          :diary="diary"
          :customClass="['grid-diary-item']"
        ></card-diary>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import CardDiary from "../components/CardDiary.vue";
import { useStore } from "vuex";
import SearchBar from "../components/SearchBar.vue";
import TheTitle from "../components/TheTitle.vue";

export default {
  components: {
    CardDiary,
    SearchBar,
    TheTitle
  },
  setup() {
    const store = useStore();
    const diaryState = computed(() => store.state.diary);
    // const pinedDiary = computed(() => store.getters["diary/getPinedDiary"]);
    const getDiary = computed(() => store.getters["diary/searchDiary"]);
    const isUserTyped = ref("");

    const filteredGettersOptions = reactive({
      mood: computed(() => store.getters["diary/allMood"]),
      tag: computed(() => store.getters["diary/allTag"]),
      location: computed(() => store.getters["diary/allLocation"])
    });

    // Select Ref
    const selectValue = reactive({
      mood: "Default",
      location: "Default",
      tag: "Default"
    });

    function searchItems(value) {
      isUserTyped.value = value;
      store.commit("diary/setCurrentSearch", value);
    }

    const defineTitle = computed(() => {
      return isUserTyped.value ? "Search Result" : "List Diary";
    });

    const defineTitleAmount = computed(() => {
      return isUserTyped.value
        ? getDiary.value.length
        : diaryState.value.allDiary.length;
    });

    return {
      searchItems,
      defineTitle,
      defineTitleAmount,
      diaryState,
      isUserTyped,
      getDiary,
      filteredGettersOptions,
      selectValue
    };
  }
};
</script>

<style></style>
