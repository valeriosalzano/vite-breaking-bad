<template>
  <div v-if="store.loading" class="loading-page">
    <p class="display-2 position-fixed top-50 start-50 translate-middle">Caricamento in corso...</p>
  </div>
</template>

<script>
import { store } from '../store/store.js';

export default {
  name: 'Loading page',
  data() {
    return {
      store,
    }
  },
}
</script>

<style lang="scss" scoped>
@use '../styles/partials/variables';
.loading-page {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: variables.$loading-bg-color;
  color: variables.$loading-text-color;;
  z-index: 9;
}
</style>