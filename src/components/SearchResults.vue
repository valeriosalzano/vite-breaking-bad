<template>
  <div class="search-results container mt-5">
    <p class="py-3 ps-4 display-5 text-bg-dark rounded-5">Found {{ computedResults }} cards.</p>
  </div>
</template>

<script>
import { store } from '../store/store.js';

export default {
  name: 'Search Results',
  data() {
    return {
      store,
    }
  },
  computed: {
    computedResults(){
      return this.store.cardsData.length;
    }
  },
}
</script>

<style lang="scss" scoped>
  
</style>