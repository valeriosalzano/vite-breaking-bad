<template>
  <div class="filter-bar container">
    <select class="form-select text-bg-dark" id="filter-bar-select">
      <option value="Dark Magician">Dark Magician</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'Filter Bar'
}
</script>

<style lang="scss" scoped>
select {
  max-width: 250px;
}
</style>