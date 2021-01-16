<template>
  <div
    class=" w-full max-h-screen p-3 sm:p-5 lg:p-7 text-left overflow-y-auto "
    id="about"
  >
    <search-bar @searchItems="searchItems"></search-bar>
    <section id="list-diary">
      <div id="title">
        <h1 class="title-heading bg-gray-800">
          {{ defineTitle }}
          <div
            class="box-atention-color inline-block px-5 py-2 ml-2 rounded-lg"
          >
            {{ defineTitleAmount }}
          </div>
        </h1>
      </div>
      <div class="mt-6 grid grid-cols-4 gap-7">
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
import { computed, ref } from 'vue';
import CardDiary from '../components/CardDiary.vue';
import { useStore } from 'vuex';
import SearchBar from '../components/SearchBar.vue';
// import ItemContainer from "../components/ItemContainer.vue";

export default {
  components: {
    CardDiary,
    SearchBar,
    // ItemContainer
  },
  setup() {
    const store = useStore();
    const diaryState = computed(() => store.state.diary);
    // const pinedDiary = computed(() => store.getters["diary/getPinedDiary"]);
    const getDiary = computed(() => store.getters['diary/searchDiary']);
    const isUserTyped = ref('');

    function searchItems(value) {
      isUserTyped.value = value;
      store.commit('diary/setCurrentSearch', value);
    }

    const defineTitle = computed(() => {
      return isUserTyped.value ? 'Serach Result' : 'List Diary';
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
      // pinedDiary
      isUserTyped,
      getDiary,
    };
  },
};
</script>

<style></style>
