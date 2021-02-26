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
            <select name="Sort By" class="custom-select rounded-full">
              <option value="none" selected>None</option>
              <option>Default </option>
            </select>
          </div>

          <div class=" flex items-center">
            <button
              class="box-atention-color rounded-2xl p-3 font-bold"
              @click="advancedSearchToggle = !advancedSearchToggle"
            >
              Advanced Search
              <font-awesome-icon class="ml-3" icon="search" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class=" transition-all duration-500 ease-in-out overflow-hidden"
      :class="[advancedSearchToggle ? 'max-h-80 ' : 'max-h-0 ']"
    >
      <div class="grid grid-cols-1">
        <div class="flex flex-col">
          Mood
          <select name="mood" class="custom-select" v-model="select.mood">
            <option value="None" selected>None</option>
            <option
              v-for="mood in filteredGettersOptions.mood"
              :value="mood"
              :key="mood"
            >
              {{ mood }}
            </option>
          </select>
        </div>
        <div class="flex flex-col">
          Location
          <select
            name="location"
            class="custom-select"
            v-model="select.location"
          >
            <option value="None" selected>None</option>
            <option
              v-for="location in filteredGettersOptions.location"
              :value="location"
              :key="location"
            >
              {{ location }}
            </option>
          </select>
        </div>
        <div class="flex flex-col">
          Tags
          <select name="tags" class="custom-select" v-model="select.tag">
            <option value="None" selected>None</option>
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
    <section
      id="list-diary"
      class=" bg-white rounded-xl bg-opacity-70 shadow-md lg:p-5 p-2 my-4 lg:my-8"
    >
      <div class="flex items-center justify-between">
        <the-title :title="defineTitle" :amount="defineTitleAmount"></the-title>
      </div>
      <div class="mt-6 grid grid-cols-1 bsm:grid-cols-2 xl:grid-cols-3 gap-3">
        <div v-if="diaryState.loading">Loading up data ..</div>
        <card-diary
          v-else-if="getDiary && !currentFiltered"
          v-for="diary in getDiary"
          :key="diary.id"
          :diary="diary"
          :customClass="['grid-diary-item']"
        ></card-diary>
        <card-diary
          v-else-if="currentFiltered"
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
    const currentFiltered = computed(
      () => store.state.diary.currentResultFilteredOption
    );

    const getDiary = computed(() => store.getters["diary/searchDiary"]);
    const allDiaryState = computed(() => store.state.diary.allDiary);
    const isUserTyped = ref("");
    const userSelectSomething = ref("");
    const advancedSearchToggle = ref(false);

    const filteredGettersOptions = reactive({
      mood: computed(() => store.getters["diary/allMood"]),
      tag: computed(() => store.getters["diary/allTag"]),
      location: computed(() => store.getters["diary/allLocation"])
    });

    // Select Ref
    const select = reactive({
      mood: "None",
      location: "None",
      tag: "None"
    });

    const buildFilter = filter => {
      let query = {};
      for (let keys in filter) {
        if (filter[keys].constructor === Array && filter[keys][0] !== "None") {
          query[keys] = filter[keys];
        }
      }
      console.log(query);
      return query;
    };

    const filterData = (data, query) => {
      const filteredData = data.filter(item => {
        for (let key in query) {
          if (item[key] === undefined || !query[key].includes(item[key])) {
            return false;
          }
        }
        return true;
      });
      return filteredData;
    };

    const selectFiltered = computed(() => {
      const choosenTags = {
        mood: [select.mood],
        location: [select.location],
        tag: [select.tag]
      };
      const query = buildFilter(choosenTags);
      const result = filterData(allDiaryState.value, query);

      return result;
    });
    store.commit("diary/setCurrentResultFilteredOption", selectFiltered);

    function searchItems(value) {
      isUserTyped.value = value;
      store.commit("diary/setCurrentSearch", value);
    }

    const defineTitle = computed(() => {
      return isUserTyped.value || userSelectSomething.value
        ? "Search Result"
        : "List Diary";
    });

    const defineTitleAmount = computed(() => {
      return getDiary.value.length;
    });

    return {
      searchItems,
      defineTitle,
      defineTitleAmount,
      diaryState,
      isUserTyped,
      getDiary,
      filteredGettersOptions,
      select,
      selectFiltered,
      currentFiltered,
      advancedSearchToggle
    };
  }
};
</script>

<style></style>
