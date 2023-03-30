<template>
  <div class="filter-bar-select">
    <select class="form-select text-bg-dark" id="filter-bar-select" v-model="store.searchFilter[filterKey]" @change="$emit('filterChange')">
      <option value=""> {{default}} </option>
      <option v-for="option in options" :value="option.value">{{ option.text }}</option>
    </select>
  </div>
</template>

<script>
import { store } from '../store/store';

export default {
  name: 'Filter Bar Select',
  data() {
    return {
      store,
    }
  },
  props: {
    default: String,
    options: Array,
    filterKey: String,
  }
}
</script>

<style lang="scss" scoped>
  
</style>