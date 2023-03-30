<template>
  <div class="card h-100 position-relative bg-transparent border-dark">
    <img class="img-fluid" :src="computedImg" :alt="computedName">
    <div class="card-text text-bg-dark text-center position-relative px-3 pb-5 h-100 rounded-bottom">
      <h3 class="py-3">{{ computedName }}</h3>
      <h5 class="position-absolute bottom-0 start-50 translate-middle-x w-100">{{ computedArchetype }}</h5>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardData : Object,
  },
  computed: {
    computedImg(){
      return this.cardData.card_images[0].image_url;
    },
    computedName(){
      return this.cardData.name;
    },
    computedArchetype(){
      return this.cardData.archetype? this.cardData.archetype : 'No archetype' ;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>