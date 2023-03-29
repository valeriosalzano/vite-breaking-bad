<script>
import axios from 'axios';

import { store } from './store/store.js';

import TheHeader from './components/TheHeader.vue';
import FilterBar from './components/FilterBar.vue';
import CardsList from './components/CardsList.vue';

export default {
  components: {
    TheHeader,
    FilterBar,
    CardsList,
  },
  data() {
    return {
      store,
    }
  },
  created() {
    this.getCards();
  },
  methods: {
    getCards(){
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
      .then( response => this.store.cardsData = response.data.data);
    },
    getImgPath(img){
      return new URL (`../assets/images/${img}`,import.meta.url).href;
    }
  },
}
</script>

<template>
  <div class="app-wrapper">
    <header>
      <TheHeader title='Yu-Gi-Oh API'></TheHeader>
    </header>

    <main class="py-3">
      <FilterBar></FilterBar>
      <CardsList></CardsList>
    </main>

    <footer>

    </footer>
  </div>

</template>

<style lang="scss">
  @use './styles/general.scss'

</style>
