<template>
  <div
    id="modal-box"
    class="
      fixed
      flex
      items-center
      justify-center
      z-50
      top-0
      left-0
      bottom-0
      right-0
      bg-gray-400 bg-opacity-50
      md:p-4
      p-2
      xl:px-48
      xl:py-10
      2xl:px-72
      2xl:py-16
    "
    v-if="diaryIsOpened"
  >
    <div
      id="modal-content"
      class="
        relative
        block
        bg-white
        w-screen
        h-full
        max-h-full
        shadow-lg
        rounded-2xl
        overflow-hidden
        pb-20
      "
    >
      <div
        id="window-control"
        class="box-atention-color w-full h-auto p-2 flex"
      >
        <button
          class="nav-link mb-0 bg-gray-600 text-white hover:bg-gray-400 ml-auto"
          @click="updateStatus"
        >
          <font-awesome-icon class="text-2xl text-white" icon="times" />
        </button>
      </div>
      <div
        id="modal-info"
        class="
          md:mt-0
          w-full
          h-full
          overflow-y-auto overflow-x-hidden
          px-5
          py-2
        "
      >
        <form id="diary-note-text-handler" @submit.prevent="submitDiary">
          <div id="title-container">
            <label for="title" class="font-bold flex items-center py-3"
              >Title</label
            >
            <input
              id="title"
              placeholder="Add Title"
              v-model="diaryData.title"
              class="border rounded-2xl w-full px-2 py-2 text-2xl shadow"
              type="text"
            />
          </div>
          <div
            id="group-diary"
            class="
              flex flex-col
              lg:flex-row
              py-2
              my-4
              max-h-full
              xl:h-auto
              object-center object-contain
            "
          >
            <div
              id="image-container"
              class="
                flex
                items-center
                justify-center
                w-full
                rounded-2xl
                lg:max-w-xl
                2xl:max-w-3xl
                lg:h-auto
                overflow-hidden
                relative
                shadow-allround
              "
            >
              <label
                for="file"
                class="
                  cursor-pointer
                  bg-white
                  text-gray-500
                  w-full
                  h-full
                  flex flex-col
                  text-center
                  items-center
                  justify-center
                  p-20
                "
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
                :src="diaryData.assets"
                class="inline-block object-contain max-h-image-sm"
                v-if="isImage"
              />
              <div id="image-option" class="absolute bottom-2 left-2">
                <button
                  class="button-option"
                  @click="deleteImgAssets"
                  v-if="isImage"
                >
                  <font-awesome-icon icon="trash" />
                </button>
              </div>
            </div>
            <div
              id="options-stuff"
              class="
                lg:ml-3
                mt-2
                lg:mt-0
                min-w-min
                flex-shrink-0 flex flex-grow flex-col
                rounded-2xl
                text-lg text-gray-600
              "
            >
              <div id="tag-option" class="flex flex-col mb-2">
                <label for="add-tag" class="font-bold flex items-center py-2">
                  <p class="mr-3">Tag</p>
                  <font-awesome-icon icon="tag" />
                </label>
                <input
                  type="text"
                  id="add-label"
                  placeholder="Add Tag"
                  v-model="diaryData.tag"
                  class="border rounded-2xl bg-white px-3 py-2 shadow"
                />
              </div>
              <div id="mood-option" class="flex flex-col">
                <label
                  for="mood-option"
                  class="py-3 font-bold flex items-center"
                >
                  <p class="mr-3">Mood</p>
                  <font-awesome-icon icon="theater-masks" />
                </label>
                <select
                  name="mood-option"
                  id="mood-option"
                  v-model="diaryData.mood"
                  class="p-2 rounded-2xl bg-gray-100 shadow"
                >
                  <option value="Happy">Happy</option>
                  <option value="Sad">Sad</option>
                  <option value="Angry">Angry</option>
                  <option value="Annoyed">Annoyed</option>
                  <option value="Excited">Excited</option>
                </select>
              </div>
              <div id="location-option" class="flex flex-col mb-2">
                <label
                  for="add-location"
                  class="font-bold flex items-center py-3"
                >
                  <p class="mr-3">Location</p>
                  <font-awesome-icon icon="map-marker-alt" />
                </label>
                <input
                  type="text"
                  id="add-location"
                  placeholder="Add location"
                  v-model="diaryData.location"
                  class="border rounded-2xl bg-white px-3 py-2 shadow"
                />
              </div>
              <div id="created-on">
                <div class="flex items-center">
                  <h1 class="font-bold py-3 mr-3">Created on</h1>
                  <font-awesome-icon icon="calendar-plus" />
                </div>
                <p>{{ new Date().toDateString() }}</p>
              </div>
            </div>
          </div>
          <div id="text-editor">
            <ckeditor
              :editor="editorOptions.editor"
              v-model="diaryData.content"
              :config="editorOptions.config"
            />
          </div>
          <div id="button-submit" class="flex">
            <button
              type="submit"
              class="
                box-atention-color
                shadow-lg
                font-bold
                px-2
                py-2
                my-4
                ml-auto
                rounded-2xl
                justify-self-start
              "
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
import { ref, reactive, computed, watchEffect } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useStore } from "vuex";

export default {
  props: {
    isOpened: Boolean,
    id: Number,
    type: String
  },
  emits: ["updateStatus"],
  setup(props, { emit }) {
    const imgIsFull = reactive({
      isFull: false
    });
    const store = useStore();
    const diaryIsOpened = ref(props.isOpened);
    const currentAllDiary = computed(() => store.state.diary.allDiary);
    const currentDiaryLoaded = computed(() => store.state.diary.currentDiary);

    const diaryIsExistData = ref([]);

    function updateStatus() {
      // Set To false so the modal will be closed
      emit("updateStatus", false);
    }

    const editorOptions = reactive({
      editor: ClassicEditor,
      config: {
        removePlugins: ["insertImage", "mediaEmbed"]
      }
    });

    const diaryData = ref({
      id: generateId(),
      type: "diary",
      title: "",
      content: "",
      tag: "",
      location: "",
      pin: false,
      mood: "Happy",
      assets: "",
      edited: 1,
      createdOn: new Date().toDateString()
    });

    const isImage = computed(() => {
      if (diaryData.value.assets !== "") {
        return true;
      } else {
        return false;
      }
    });

    function deleteImgAssets() {
      // Reset Assets
      diaryData.value.assets = "";
    }

    function getUrlImage(e) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = () => {
        diaryData.value.assets = reader.result;
      };
    }

    function generateId() {
      let initId;

      if (props.id) {
        initId = props.id;
      } else if (currentAllDiary.value.length === 0) {
        initId = 1;
      } else {
        const lastIndex = currentAllDiary.value.length - 1;
        initId = currentAllDiary.value[lastIndex].id + 1;
      }

      return initId;
    }

    function submitDiary() {
      const addData = { ...diaryData.value };
      if (addData.title === "") {
        addData.title = `Untitled ${addData.id}`;
      }

      if (addData.location === "") {
        addData.location = "Unknown";
      }

      if (addData.tag === "") {
        addData.tag = "Untitled";
      }
      store.dispatch("diary/saveTheDiary", addData);
      updateStatus();
    }

    function loadDiary() {
      if (props.type && props.id) {
        store.dispatch("diary/getTheDiary", props.id);

        watchEffect(() => {
          diaryData.value = currentDiaryLoaded.value;
        });
      }
    }

    loadDiary();

    return {
      deleteImgAssets,
      getUrlImage,
      submitDiary,
      isImage,
      diaryData,
      editorOptions,
      imgIsFull,
      diaryIsOpened,
      updateStatus,
      diaryIsExistData
    };
  }
};
</script>

<style>
.ck-editor {
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
}
</style>
