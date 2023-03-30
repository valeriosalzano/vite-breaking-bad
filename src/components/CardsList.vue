<template>
  <div class="cards-list container my-4 position-relative">
    <LoadingPage></LoadingPage>
    <div class="row d-flex flex-wrap g-3">
      <div v-for=" (card, index) in store.cardsData" class="column col-md-4 col-sm-6 col-xs-12" :key="index">
        <Card :cardData="card"></Card>
      </div>
    </div>     
  </div>
</template>

<script>
import { store } from '../store/store.js';

import Card from './Card.vue';
import LoadingPage from './LoadingPage.vue';

export default {
  name: 'Cards List',
  components: {
    Card,
    LoadingPage,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<style lang="scss" scoped>
@media screen and (min-width: 992px){
  .row .column {
    width: 20%;
  }
}
</style>