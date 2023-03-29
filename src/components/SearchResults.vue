<template>
  <div class="search-results container mt-5">
    <p class="py-3 ps-4 fs-3 text-bg-dark rounded">Found {{ results }} cards.</p>
  </div>
</template>

<script>

export default {
  name: 'Search Results',
  props: {
    results: Number,
  }
}
</script>

<style lang="scss" scoped>
  
</style>