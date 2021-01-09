<template>
  <nav
    class="fixed bottom-0 right-0 w-full md:relative md:h-screen flex items-center p-4 md:flex-col nav-color flex-shrink-0 md:w-56 lg:w-72 "
  >
    <user-badge class="hidden md:block"></user-badge>
    <div id="nav-links" class="text-left flex justify-around w-full md:block">
      <router-link to="/" class="nav-link font-bold">
        <font-awesome-icon class="text-2xl" icon="home" />
        <p class=" ml-5 hidden md:inline">Home</p>
      </router-link>
      <router-link to="/diary-note" class="nav-link font-bold">
        <font-awesome-icon class="text-2xl" icon="book-open" />
        <p class=" ml-5 hidden md:inline">Diary Note</p>
      </router-link>
      <add-button-handler class="md:hidden" />
      <router-link to="/your-target" class="nav-link font-bold">
        <font-awesome-icon class="text-2xl" icon="sticky-note" />
        <p class=" ml-5 hidden md:inline">Your Target</p>
      </router-link>
      <router-link to="/event" class="nav-link font-bold">
        <font-awesome-icon class="text-2xl" icon="calendar-alt" />
        <p class=" ml-5 hidden md:inline">Event</p>
      </router-link>
      <router-link to="/achievement" class="nav-link font-bold hidden lg:block">
        <font-awesome-icon class="text-2xl" icon="trophy" />
        <p class=" ml-5 hidden md:inline">Achievement</p>
      </router-link>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import UserBadge from "./UserBadge.vue";
import AddButtonHandler from "./AddButtonHandler.vue";

export default {
  components: {
    UserBadge,
    AddButtonHandler
  },
  props: {
    logo: {
      type: String,
      required: true
    }
  },
  setup() {
    const router = useRouter();
    const links = router.options.routes;

    function getImg(logo) {
      return require("../assets/" + logo);
    }

    return {
      getImg,
      links
    };
  }
};
</script>

<style>
.nav-link {
  @apply block py-2 sm:py-4 px-4 sm:px-6 md:flex md:items-center hover:bg-gray-200 transition-all rounded-md md:mb-5;
}

.nav-link.router-link-exact-active {
  @apply bg-gray-300 transition-all ease-in;
}

.nav-color {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
}
</style>
