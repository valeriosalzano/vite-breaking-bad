<template>
  <div class="filter-bar container d-flex justify-content-between">
    <select class="form-select text-bg-dark" id="filter-bar-select" v-model="store.searchFilter.archetype" @change="$emit('filterChange')">
      <option value=""> All Archetypes </option>
      <option v-for="archetype in store.cardsArchetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
    </select>
  </div>
</template>

<script>
import { store } from '../store/store.js';
import axios from 'axios';

export default {
  name: 'Filter Bar',
  data() {
    return {
      store,
    }
  },
}
</script>

<style lang="scss" scoped>
select {
  max-width: 250px;
}
</style>