<template>
  <div class="filter-bar container d-flex justify-content-between">
    <select class="form-select text-bg-dark" id="filter-bar-select">
      <option value="default"> Default </option>
      <option v-for="archetype in store.cardsArchetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
    </select>
    <button type="button" class="btn btn-dark" @click="getCards(`archetype=${getSelectValue()}`)">Ricerca</button>
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
  methods: {
    getSelectValue(){
      return document.getElementById('filter-bar-select').value; 
    },
    getCards(...filters){
      this.store.loading = true;
      let string = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0';
      if(filters.length && this.getSelectValue()!='default'){
        filters.forEach(filter => string += `&${filter}`);
      }
      axios.get(string)
        .then( response => {
          this.store.cardsData = response.data.data;
          setTimeout(()=> this.store.loading = false,1000);
        });
    },
  }
}
</script>

<style lang="scss" scoped>
select {
  max-width: 250px;
}
</style>