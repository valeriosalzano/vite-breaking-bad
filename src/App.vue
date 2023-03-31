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
    verifyChange(){
      // verifico se sto solo riducendo il numero di carte visibili
      let prevLimit = this.store.cardsData.length;
      let nextLimit = this.store.searchFilter.num;

      if (prevLimit > nextLimit){
        // CASO A: sto riducendo gli elementi, elimino le carte in eccesso
      this.store.cardsData.splice(nextLimit,prevLimit-nextLimit);
      this.store.lastReached = false;
      } else {
        // CASO B: sto aumentando il numero di elementi, cerco di caricare solo quelli che non ho
        //controllo di non aver caricato già tutte le disponibili, in quel caso interrompo
        if(this.store.lastReached == true ){
          return
        }

        this.store.searchFilter.offset = prevLimit;
        this.store.searchFilter.num = nextLimit - prevLimit;

        let apiUrl = this.generateApiUrl();

        this.store.loading = true;
        axios.get(apiUrl)
        .then( response => {
          // inserisco i nuovi elementi generati in cardsData
          response.data.data.forEach(card => { this.store.cardsData.push(card); })
          // controllo se ho caricato fino all'ultima card
          if(this.store.cardsData.length < nextLimit){
            this.store.lastReached = true;
          }
          // resetto i valori dei filtri
          this.store.searchFilter.num = nextLimit;
          this.store.searchFilter.offset = 0;
          setTimeout(()=> this.store.loading = false,1000);
        })

      }
    },
    getCards(){
      this.store.loading = true;

      let apiUrl = this.generateApiUrl();
      
      axios.get(apiUrl)
      .then( response => {
        this.store.cardsData = response.data.data;
        // controllo se ho caricato fino all'ultima card
        if(this.store.cardsData.length < this.store.searchFilter.num){
          this.store.lastReached = true;
        } else {
          this.store.lastReached = false;
        }

        setTimeout(()=> this.store.loading = false,1000);
      });
    },
    generateApiUrl(){
      let apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
      let modifiedUrl = false;
      
      // filters check
      Object.keys(this.store.searchFilter).forEach(key => {
        
        // se il valore della key è una stringa vuota non aggiungo filtri all'url
        if (this.store.searchFilter[key] !== ''){
          // alla prima aggiunta inserisco il "?" poi "&" ai seguenti nell'url
          if (modifiedUrl == false){
            apiUrl += '?';
            modifiedUrl = true;
          } else {
            apiUrl += '&';
          }
          apiUrl += `${key}=${this.store.searchFilter[key]}`;
        }
      });

      return apiUrl;
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
      <FilterBar @filterChangeArchetype="getCards" @filterChangeLimit="verifyChange"></FilterBar>
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
