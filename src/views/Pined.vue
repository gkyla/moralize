<template>
  <div id="Pined" class="container-page">
    <p>From pinedDiary</p>
    <section
      id="list-diary"
      class="
        bg-white
        rounded-xl
        bg-opacity-70
        shadow-md
        lg:p-5
        p-2
        my-4
        lg:my-8
      "
    >
      <div class="flex items-center justify-between">
        <the-title title="Pinned" :amount="pinnedDiary.length"></the-title>
      </div>
      <div class="mt-6 grid grid-cols-1 bsm:grid-cols-2 xl:grid-cols-3 gap-3">
        <card-diary
          v-for="diary in pinnedDiary"
          :key="diary.id"
          :diary="diary"
          :customClass="['grid-diary-item', 'text-left']"
        ></card-diary>
      </div>
    </section>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import TheTitle from "../components/TheTitle.vue";
import CardDiary from "../components/CardDiary.vue";

export default {
  components: {
    TheTitle,
    CardDiary,
  },
  setup() {
    const store = useStore();
    const pinnedDiary = computed(() => store.getters["diary/getPinedDiary"]);

    return { pinnedDiary };
  },
};
</script>

<style></style>
