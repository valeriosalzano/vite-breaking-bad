<template>
  <div class="filter-bar container d-flex justify-content-between align-items-center">
    <div class="input-group">
      <label for="filter-bar-archetype" class="input-group-text text-bg-dark">Archetype:</label>
      <select class="form-select text-bg-dark" id="filter-bar-archetype" v-model="store.searchFilter.archetype" @change="$emit('filterChangeArchetype')">
        <option value=""> All Archetypes </option>
        <option v-for="archetype in store.cardsArchetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
      </select>
    </div>

    <div class="input-group">
      <label for="filter-bar-limit" class="input-group-text text-bg-dark">Results limit:</label>
      <select class="form-select text-bg-dark" id="filter-bar-limit" v-model="store.searchFilter.num" @change="$emit('filterChangeLimit')">
        <option value="24"> 24 </option>
        <option value="30"> 30 </option>
        <option value="50"> 50 </option>
        <option value="100"> 100 </option>
      </select>
    </div>

  </div>
</template>

<script>
import { store } from '../store/store.js';

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