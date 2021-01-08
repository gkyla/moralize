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
</template>

<script>
export default {};
</script>

<style></style>
