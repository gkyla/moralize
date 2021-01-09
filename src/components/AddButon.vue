<template>
  <div id="button">
    <button
      class="nav-link md:bg-gray-600 md:text-white md:hover:bg-gray-400"
      @click="modalOpen = !modalOpen"
    >
      <font-awesome-icon class="text-2xl" icon="plus-circle" />
    </button>
    <teleport to="#modal">
      <div
        id="modal-box"
        class="absolute flex items-center justify-center z-20 top-0 left-0 bottom-0 right-0 bg-gray-400 bg-opacity-50"
        v-if="modalOpen"
      >
        <div
          id="modal-content"
          class="relative flex px-5 items-center flex-col bg-white h-screen w-screen md:w-auto md:h-auto p-14 shadow-lg sm:rounded-xl max-h-full overflow-hidden"
        >
          <button
            class="nav-link absolute top-2 bg-gray-600 text-white hover:bg-gray-400 right-2"
            @click="modalOpen = false"
          >
            <font-awesome-icon class="text-2xl text-white" icon="times" />
          </button>
          <div
            id="modal-info"
            class=" md:mt-0 w-full justify-center flex flex-col lg:p-5 max-h-full"
          >
            <button
              id="add-diary"
              class="my-4 p-5 text-left border-4 hover:bg-gray-200 border-green-300 bg-gray-100 shadow-md rounded-lg"
              @click="(modalOpen = false), (openDiaryModal = true)"
            >
              <h1 class="font-bold text-lg">Diary Note</h1>
              <p class="pt-3">
                write down all the things you want to express , you can add
                pictures, labels and much more
              </p>
            </button>
            <button
              id="add-target"
              class="my-4 p-5 text-left border-4 border-green-300 bg-gray-100 shadow-md rounded-lg"
            >
              <h1 class="font-bold text-lg">Your Target</h1>
              <p class="pt-3">
                Set your target, but you have to confirm if you want to mark
                this target as complete, your integrity is tested
              </p>
            </button>
          </div>
        </div>
      </div>

      <div
        id="modal-box"
        class="absolute flex items-center justify-center z-20 top-0 left-0 bottom-0 right-0 bg-gray-400 bg-opacity-50 md:p-4 xl:p-20 "
        v-if="openDiaryModal"
      >
        <button
          class="nav-link absolute  bg-gray-600 text-white hover:bg-gray-400 top-2 right-2 xl:right-12 xl:top-12 z-20"
          @click="openDiaryModal = false"
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
                  class="border-b-2 w-full px-2 py-2 text-2xl"
                  type="text"
                />
              </div>
              <div
                id="group-diary"
                class="flex flex-col lg:flex-row py-2 my-4 max-h-full lg:h-1/2 object-center object-cover"
              >
                <div
                  id="image-container"
                  class=" border-2  w-full rounded-lg lg:w-2/3 overflow-hidden relative"
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
                    class="block w-full h-full "
                    :class="[imgIsFull ? 'object-cover' : 'object-contain']"
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
                  <div id="label-option" class="flex flex-col mb-2">
                    <label
                      for="add-label"
                      class="font-bold flex items-center py-3"
                    >
                      <p class="mr-3">Label</p>
                      <font-awesome-icon icon="tag"></font-awesome-icon>
                    </label>
                    <input
                      type="text"
                      id="add-label"
                      placeholder="Add Label"
                      class="border rounded-lg bg-white px-3 py-2"
                    />
                  </div>
                  <div id="mood-option" class="flex flex-col">
                    <label for="mood-option" class="py-3 font-bold">Mood</label>
                    <select
                      name="mood-option"
                      id="mood-option"
                      class="p-2 rounded-md"
                    >
                      <option value="Happy">Happy</option>
                      <option value="Sad">Sad</option>
                      <option value="Angry">Angry</option>
                      <option value="Annoyed">Annoyed</option>
                      <option value="Excited">Excited</option>
                    </select>
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
    </teleport>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export default {
  setup() {
    const modalOpen = ref(false);
    const openDiaryModal = ref(false);

    const editorOptions = reactive({
      editor: ClassicEditor,
      data: "<p>Write anything you want ..</p>",
      config: {}
    });

    const diaryData = reactive({
      id: 1,
      title: "",
      content: "",
      assets: [],
      createdOn: Date().toString()
    });

    const imgIsFull = ref(true);

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

    function submitDiary() {}

    // const yourTargetData = reactive({
    //   id: 1,
    //   title: "",
    //   content: "",
    //   done: false,
    //   assets: [],
    //   createdOn: Date().toString(),
    //   verifyOptions: [
    //     {
    //       content: "",
    //       assets: []
    //     }
    //   ]
    // });

    return {
      modalOpen,
      openDiaryModal,
      diaryData,
      editorOptions,
      isImage,
      getUrlImage,
      imgIsFull,
      deleteImgAssets,
      smallImg,
      submitDiary,
      expandImg
    };
  }
};
</script>

<style>
.ck-editor__editable_inline {
  border-radius: 0 0 10px 10px !important;
  min-height: 300px;
}

.ck-toolbar {
  border-radius: 10px 10px 0 0 !important;
}

.cke_chrome {
  border-radius: 8px;
}
</style>
