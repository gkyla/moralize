<template>
  <div id="button">
    <button class="nav-link md:hidden" @click="modalOpen = !modalOpen">
      <font-awesome-icon class="text-2xl" icon="plus-circle" />
    </button>
    <teleport to="#modal">
      <div v-if="modalOpen" class="the-modal absolute">
        <p>Hallo Clicked Button</p>
      </div>
    </teleport>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false
    };
  }
};
</script>

<style></style>
