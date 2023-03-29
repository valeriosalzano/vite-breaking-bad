<template>
  <div class="cards-list container my-5">

    <div class="row d-flex flex-wrap g-3">
      <div v-for=" (card, index) in store.cardsData" class="col-3" :key="index">
        <Card :cardData="card"></Card>
      </div>
    </div>     
  </div>
</template>

<script>
import { store } from '../store/store.js';
import Card from './Card.vue';

export default {
  name: 'Cards List',
  components: {
    Card,
  },
  data() {
    return {
      store,
    }
  },
}
</script>

<style lang="scss" scoped>
</style>