<template>
  <div id="search-bar" class="relative w-full flex items-center">
    <input
      type="text"
      class="p-4 w-full  border rounded-lg shadow-md "
      placeholder="Search your diary"
      @input="searchValue"
      v-model="input"
    />
    <button class="absolute-centered right-2 px-4 py-2">
      <font-awesome-icon icon="search" />
    </button>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  emits: ["searchItems"],
  setup(ctx, { emit }) {
    const input = ref("");

    function searchValue() {
      emit("searchItems", input.value);
    }

    return {
      searchValue,
      input
    };
  }
};
</script>

<style></style>
