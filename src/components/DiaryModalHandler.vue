<template>
  <div
    id="modal-box"
    class="absolute flex items-center justify-center z-20 top-0 left-0 bottom-0 right-0 bg-gray-400 bg-opacity-50 md:p-4 xl:p-10 "
    v-if="diaryIsOpened"
  >
    <button
      class="nav-link absolute  bg-gray-600 text-white hover:bg-gray-400 top-2 right-2 xl:right-12 xl:top-12 z-20"
      @click="updateStatus"
    >
      <font-awesome-icon class="text-2xl text-white" icon="times" />
    </button>
    <div
      id="modal-content"
      class="relative flex px-2 sm:px-3 items-center flex-col bg-white h-screen w-screen md:w-full md:h-full p-14 shadow-lg sm:rounded-xl overflow-y-auto overflow-x-hidden"
    >
      <div
        id="modal-info"
        class=" md:mt-0 w-full justify-center flex flex-col lg:p-5"
      >
        <form
          id="diary-note-text-handler flex flex-col"
          @submit.prevent="submitDiary"
        >
          <div id="title-container">
            <input
              id="title"
              placeholder="Title"
              v-model="diaryData.title"
              class="border-b-2 w-full px-2 py-2 text-2xl"
              type="text"
            />
          </div>
          <div
            id="group-diary"
            class="flex flex-col lg:flex-row py-2 my-4  max-h-full xl:h-auto object-center object-cover"
          >
            <div
              id="image-container"
              class="flex items-center justify-center border-2 w-full rounded-lg lg:max-w-xl xl:max-w-3xl lg:h-auto overflow-hidden relative"
            >
              <label
                for="file"
                class="cursor-pointer text-gray-500 w-full h-full flex flex-col text-center items-center justify-center p-20 "
                v-if="!isImage"
              >
                <font-awesome-icon icon="image" class="text-5xl" />
                <p class="font-bold">Add Image</p>
              </label>
              <input
                type="file"
                name="file"
                id="file"
                accept="image/*"
                class="hidden"
                @change="getUrlImage"
                v-if="!isImage"
              />
              <img
                :src="diaryData.assets[0]"
                class="inline-block "
                :class="[imgIsFull ? 'w-full' : 'w-auto']"
                v-if="isImage"
              />
              <div id="image-option" class="absolute bottom-2 left-2">
                <button
                  class=" bg-gray-100 py-2 px-4 shadow-md rounded-lg mr-2 opacity-50 hover:opacity-100"
                  @click="deleteImgAssets"
                  v-if="isImage"
                >
                  <font-awesome-icon icon="trash" />
                </button>
                <button
                  class=" bg-gray-100 py-2 px-4 shadow-md rounded-lg mr-2  opacity-50 hover:opacity-100 hidden lg:inline-block"
                  @click="smallImg"
                  v-if="isImage"
                >
                  <font-awesome-icon icon="compress" />
                </button>
                <button
                  class=" bg-gray-100 py-2 px-4 shadow-md rounded-lg opacity-50 hover:opacity-100 hidden lg:inline-block"
                  @click="expandImg"
                  v-if="isImage"
                >
                  <font-awesome-icon icon="expand-arrows-alt" />
                </button>
              </div>
            </div>
            <div
              id="options-stuff"
              class="lg:ml-3 mt-2 lg:mt-0 min-w-min flex-shrink-0 flex flex-grow flex-col rounded-lg"
            >
              <div id="tag-option" class="flex flex-col mb-2">
                <label for="add-tag" class="font-bold flex items-center py-3">
                  <p class="mr-3">Tag</p>
                </label>
                <input
                  type="text"
                  id="add-label"
                  placeholder="Add Tag"
                  v-model="diaryData.label"
                  class="border rounded-lg bg-white px-3 py-2"
                />
              </div>
              <div id="mood-option" class="flex flex-col">
                <label for="mood-option" class="py-3 font-bold">Mood</label>
                <select
                  name="mood-option"
                  id="mood-option"
                  v-model="diaryData.mood"
                  class="p-2 rounded-md bg-gray-100"
                >
                  <option value="Happy">Happy</option>
                  <option value="Sad">Sad</option>
                  <option value="Angry">Angry</option>
                  <option value="Annoyed">Annoyed</option>
                  <option value="Excited">Excited</option>
                </select>
              </div>
              <div id="created-on">
                <h1 class="font-bold text-md py-3">Created on</h1>
                <p>{{ new Date().toDateString() }}</p>
              </div>
            </div>
          </div>
          <div id="text-editor">
            <ckeditor
              :editor="editorOptions.editor"
              v-model="editorOptions.data"
              :config="editorOptions.config"
              class="rounded-xl"
            />
          </div>
          <div id="button-submit" class="flex">
            <button
              type="submit"
              class="box-atention-color shadow-lg font-bold px-2 py-2 my-4 ml-auto rounded-lg"
            >
              Save Diary
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
import { ref, reactive, computed } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  props: {
    isOpened: Boolean
  },
  emits: ["updateStatus"],
  setup(props, { emit }) {
    const imgIsFull = ref(true);
    const diaryIsOpened = ref(props.isOpened);

    function updateStatus() {
      // Set To false so the modal will be closed
      emit("updateStatus", false);
    }

    const editorOptions = reactive({
      editor: ClassicEditor,
      data: "<p></p>",
      config: {}
    });

    const diaryData = reactive({
      id: 1,
      title: "",
      content: editorOptions.data,
      label: "",
      mood: "Happy",
      assets: [],
      createdOn: Date().toString()
    });

    const isImage = computed(() => {
      if (diaryData.assets.length > 0) {
        return true;
      } else {
        return false;
      }
    });

    function deleteImgAssets() {
      // Reset Assets
      diaryData.assets = [];
    }

    function smallImg() {
      imgIsFull.value = false;
    }

    function expandImg() {
      imgIsFull.value = true;
    }

    function getUrlImage(e) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        diaryData.assets.push(reader.result);
      };
    }

    function submitDiary() {
      const addData = {
        title: diaryData.title,
        content: diaryData.content,
        label: diaryData.label,
        mood: diaryData.mood,
        assets: diaryData.assets[0],
        createdOn: new Date().toDateString()
      };
      console.log(addData);
    }

    return {
      deleteImgAssets,
      smallImg,
      expandImg,
      getUrlImage,
      submitDiary,
      isImage,
      diaryData,
      editorOptions,
      imgIsFull,
      diaryIsOpened,
      updateStatus
    };
  }
};
</script>

<style></style>
