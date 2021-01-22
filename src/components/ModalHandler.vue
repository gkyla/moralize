<template>
  <p></p>
  <!-- <div
      id="modal-box"
      class="absolute flex items-center justify-center z-20 top-0 left-0 bottom-0 right-0 p-5 bg-gray-400 bg-opacity-50"
      v-if="theUser[0].firstTimeSetup"
    >
      <div
        id="modal-content"
        class="relative flex px-5 items-center flex-col text-center bg-white w-auto h-auto p-14 shadow-lg rounded-xl"
      >
        <div
          id="modal-info"
          class="mt-10 md:mt-0 w-full flex flex-col items-center"
        >
          <img
            src="./assets/moralize.png"
            class="block  w-1/3"
            alt="Moralize Logo"
          />
          <p class="p-3">
            Before we countinue we would like to ask you to fill the form for
            the Setup
          </p>
        </div>
        <form class="mt-2" @submit.prevent="formFirstTime">
          <div class="input-group my-5 flex flex-col ">
            <label class="text-left py-2" for="username">Name</label>
            <input
              type="text"
              id="username"
              class="border-2 border-green-300 px-5 py-2 rounded-lg"
              v-model="nameInput"
              required
            />
          </div>

          <div class="input-group my-5 flex flex-col">
            <label class="text-left py-2" for="username">Birthday</label>
            <input
              type="date"
              id="username"
              class="border-2 border-green-300 px-5 py-2 rounded-lg shadow"
              v-model="dateInput"
              required
            />
          </div>
          <button
            type="submit"
            class="border-2 border-green-100 py-3 px-5 rounded-lg box-atention-color mt-5 shadow"
          >
            Start Organizing Your Activity
          </button>
        </form>
      </div>
    </div>
    <div v-else>
      <div class="absolute top-0 right-0">
        <h1 class="font-bold text-4xl">Woy</h1>
      </div>
    </div> -->

  <!-- <div
        id="modal-box"
        class="absolute flex items-center justify-center z-20 top-0 left-0 bottom-0 right-0 bg-gray-400 bg-opacity-50"
        v-if="modalOpen"
      >
        <div
          id="modal-content"
          class="relative flex px-5 items-center flex-col text-center bg-white h-screen w-screen sm:w-auto sm:h-auto p-14 shadow-lg sm:rounded-xl"
        >
          <button
            class="nav-link absolute top-2 hover:text-gray-500 bg-gray-500 right-2"
            @click="modalOpen = false"
          >
            <font-awesome-icon class="text-2xl text-white" icon="times" />
          </button>
          <div
            id="modal-info"
            class="mt-10 md:mt-0 w-full flex flex-col items-center"
          >
            <img
              src="../assets/moralize.png"
              class="block  w-1/3"
              alt="Moralize Logo"
            />
            <p class="p-3">
              Before we countinue we would like to ask you to fill the form for
              the Setup
            </p>
          </div>
          <form class="mt-2" @submit.prevent="">
            <div class="input-group my-5 flex flex-col ">
              <label class="text-left py-2" for="username">Name</label>
              <input
                type="text"
                id="username"
                class="border-2 border-green-300 px-5 py-2 rounded-lg"
                required
              />
            </div>

            <div class="input-group my-5 flex flex-col">
              <label class="text-left py-2" for="username">Birthday</label>
              <input
                type="date"
                id="username"
                class="border-2 border-green-300 px-5 py-2 rounded-lg shadow"
                required
              />
            </div>
            <button
              type="submit"
              class="border-2 border-green-100 py-3 px-5 rounded-lg box-atention-color mt-5 shadow"
            >
              Start Organizing Your Activity
            </button>
          </form>
        </div>
      </div> -->

  <!-- Nice One -->
  <!-- <div
        id="modal-box"
        class="absolute flex items-center justify-center z-20 top-0 left-0 bottom-0 right-0 bg-gray-400 bg-opacity-50"
        v-if="modalOpen"
      >
        <div
          id="modal-content"
          class="relative flex px-5 items-center flex-col text-center bg-white h-screen w-screen sm:w-auto sm:h-auto p-14 shadow-lg sm:rounded-xl"
        >
          <button
            class="nav-link absolute top-2 hover:text-gray-500 bg-gray-500 right-2"
            @click="modalOpen = false"
          >
            <font-awesome-icon class="text-2xl text-white" icon="times" />
          </button>
          <div
            id="modal-info"
            class=" md:mt-0 w-full flex flex-col items-center"
          >
            <img
              src="../assets/moralize.png"
              class="block  w-1/3"
              alt="Moralize Logo"
            />
            <p class="p-3">
              Before we countinue we would like to ask you to fill the form for
              the Setup
            </p>
          </div>
          <form class="my-auto" @submit.prevent="">
            <div class="input-group my-5 flex flex-col ">
              <label class="text-left py-2" for="username">Name</label>
              <input
                type="text"
                id="username"
                class="border-2 border-green-300 px-5 py-2 rounded-lg"
                required
              />
            </div>

            <div class="input-group my-5 flex flex-col">
              <label class="text-left py-2" for="username">Birthday</label>
              <input
                type="date"
                id="username"
                class="border-2 border-green-300 px-5 py-2 rounded-lg shadow"
                required
              />
            </div>
            <button
              type="submit"
              class="border-2 border-green-100 py-3 px-5 rounded-lg box-atention-color mt-5 shadow"
            >
              Start Organizing Your Activity
            </button>
          </form>
        </div>
      </div> -->

  <!-- Backup -->

  <!-- <section id="pinned-diary" :class="[isUserTyped ? 'hidden' : '']">
      <div id="title-pinned">
        <h1 class="title-heading">
          Pinned Diary
          <div
            class="box-atention-color inline-block px-5 py-2 ml-2 rounded-lg"
          >
            {{ pinedDiary.length }}
          </div>
        </h1>
      </div>
      <item-container>
        <div v-if="diaryState.loading">Loading up data ..</div>
        <card-diary
          v-else
          v-for="diary in pinedDiary"
          :key="diary.id"
          :diary="diary"
          :customClass="['card-diary-style-home']"
        ></card-diary>
      </item-container>
    </section> -->
  <!-- 
          <div
        class="mt-6 flex flex-wrap w-full xsm:justify-between lg:justify-start"
      >
        <div v-if="diaryState.loading">Loading up data ..</div>
        <card-diary
          v-else
          v-for="diary in getDiary"
          :key="diary.id"
          :diary="diary"
          :customClass="['card-diary-style-diarynote']"
        ></card-diary>
      </div> -->

  <!-- Backup Card Target -->

  <!-- <div
    id="card"
    class=" inline-block mr-7 border-3 shadow-allround bg-white rounded-lg w-full h-full  "
  >
    <div id="content" class=" relative ">
      <div
        id="status"
        class="inline-block p-2 bg-white rounded-2xl border-4 absolute -top-5 -right-3"
        :class="[done ? 'border-green-300' : 'border-red-400']"
      >
        <font-awesome-icon
          :icon="done ? 'check' : 'percent'"
          class="border-3 border-white  "
        />
      </div>
      <div id="target-title" class="box-atention-color p-5 ">
        <h1 class="font-bold text-md">Finishing Home Work</h1>
      </div>
      <div class="p-2">
        <div id="target-content-inner" class="">
          <h1 class=" text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga,
            officia!
          </h1>
        </div>
        <div id="target-content-created" class="mt-2">
          <h1 class="text-sm font-bold">
            {{ done ? "Finished" : "12-05-2015" }}
          </h1>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  props: {
    name: String
  },
  setup() {}
};
</script>

<style></style>
