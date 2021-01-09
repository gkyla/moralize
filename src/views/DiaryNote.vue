<template>
  <div class="about">
    <form
      class="p-10 bg-gray-400 text-center"
      id="form"
      @submit.prevent="saveToDiary"
    >
      <textarea
        v-model="data.content"
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button type="submit" class="block bg-green-300">Submit Form</button>
    </form>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import moralizeDb from "../data/idb";
import CONFIG from "../settings/config";

export default {
  setup() {
    loadDiary();
    const allDiary = ref([]);
    const data = reactive({
      id: generateId(),
      content: ""
    });

    function generateId() {
      let initId;

      if (allDiary.value.length === 0) {
        initId = 1;
      } else {
        const lastIndex = allDiary.value.length - 1;
        initId = allDiary.value[lastIndex].id + 1;
      }

      return initId;
    }

    async function loadDiary() {
      const val = await moralizeDb.getAllItem(CONFIG.DB_KEY_DIARY);
      allDiary.value = val;
    }

    async function saveToDiary() {
      const dataList = {
        id: generateId(),
        content: data.content
      };
      await moralizeDb.putItem(CONFIG.DB_KEY_DIARY, dataList);
      allDiary.value.push(dataList);
    }

    return {
      data,
      saveToDiary,
      allDiary
    };
  }
};
</script>

<style></style>
