<template>
  <div v-if="store.loading" class="loading-page position-absolute w-100 h-100">
    <p class="display-2 m-5">Caricamento in corso...</p>
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
  background-color: variables.$loading-bg-color;
  color: variables.$loading-text-color;;
  z-index: 9;
}
</style>