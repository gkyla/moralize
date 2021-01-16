<template>
  <div id="badge">
    <div
      id="user-badge"
      class="flex flex-col lg:flex-row p-2 rounded-lg items-center"
    >
      <!-- <img :src="getImg(userImg)" class="" alt="Logo" /> -->
      <div class="block object-center object-cover w-1/2 lg:w-1/3 md:mb-3">
        <img
          :src="img"
          class="rounded-full border-2 border-green-300 block"
          alt="User img"
        />
      </div>
      <div
        class="text-left ml-2 flex flex-col items-center lg:items-start lg:justify-center "
      >
        <h1 class="font-bold">{{ user.userName }}</h1>
        <h1 class="font-bold text-gray-500 text-xs">3 Achievement Collected</h1>
      </div>
    </div>
    <router-link
      to="/user"
      class="nav-link py-2 md:py-4 flex items-center px-4 md:px-6 rounded-lg"
    >
      <font-awesome-icon icon="cog"></font-awesome-icon>
      <p class="ml-3 font-bold text-xl">Edit Profile</p>
    </router-link>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();

    const user = computed(() => store.state.user);
    const img = computed(() => {
      if (user.value.imgDefault) {
        return parseImg(user.value.userImg);
      } else {
        return user.value.userImg;
      }
    });

    function parseImg(img) {
      return require("../assets/" + img);
    }

    return {
      user,
      img,
      parseImg
    };
  }
};
</script>

<style></style>
