<script>
import axios from 'axios';

import { store } from './store/store.js';

import TheHeader from './components/TheHeader.vue';
import FilterBar from './components/FilterBar.vue';
import SearchResults from './components/SearchResults.vue';
import CardsList from './components/CardsList.vue';
import LoadingPage from './components/LoadingPage.vue';

export default {
  components: {
    TheHeader,
    FilterBar,
    SearchResults,
    CardsList,
    LoadingPage,
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
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
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
    doSomething(){
      console.log('emit working. Hooray!')
    }
  },
}
</script>

<template>
  <div class="app-wrapper">
    <LoadingPage></LoadingPage>
    <header>
      <TheHeader title='Yu-Gi-Oh API'></TheHeader>
    </header>

    <main class="py-3">
      <FilterBar @filterChange="doSomething"></FilterBar>
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
