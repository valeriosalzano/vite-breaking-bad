<script>
import axios from 'axios';

import { store } from './store/store.js';

import TheHeader from './components/TheHeader.vue';
import FilterBar from './components/FilterBar.vue';
import SearchResults from './components/SearchResults.vue';
import CardsList from './components/CardsList.vue';

export default {
  components: {
    TheHeader,
    FilterBar,
    SearchResults,
    CardsList,
  },
  data() {
    return {
      store,
    }
  },
  created() {
    this.getCards();
    this.getArchetypes()
  },
  methods: {
    getCards(){
      this.store.loading = true;

      let apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
      
      // filters check
      Object.keys(this.store.searchFilter).forEach((key,index) => {
        
        // se il valore della key è una stringa vuota non aggiungo filtri all'url
        if (this.store.searchFilter[key] !== ''){
          // alla prima aggiunta inserisco il "?" poi "&" ai seguenti nell'url
          !index ? apiUrl += '?' : apiUrl += '&';

          apiUrl += `${key}=${this.store.searchFilter[key]}`;
        }
      });
      
      axios.get(apiUrl)
      .then( response => {
        this.store.cardsData = response.data.data;
        setTimeout(()=> this.store.loading = false,1000);
      });
    },
    getArchetypes(){
      axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then( response => this.store.cardsArchetypes = response.data );
    },
    getImgPath(img){
      return new URL (`../assets/images/${img}`,import.meta.url).href;
    },
  },
}
</script>

<template>
  <div class="app-wrapper">
    
    <header>
      <TheHeader title='Yu-Gi-Oh API'></TheHeader>
    </header>

    <main class="py-3">
      <FilterBar @filterChange="getCards"></FilterBar>
      <SearchResults></SearchResults>
      <CardsList></CardsList>
    </main>

    <footer>

    </footer>
  </div>

</template>

<style lang="scss">
  @use './styles/general.scss'

</style>
