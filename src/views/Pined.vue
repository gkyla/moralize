<template>
  <div id="Pined">
    <p>From pinedDiary</p>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const pinnedDiary = store.getters.diary.getPinedDiary;
    console.log(pinnedDiary);
  },
};
</script>

<style></style>
