<template>
  <div class="card text-bg-dark text-center pb-5 h-100 position-relative">
    <img class="img-fluid" :src="image" :alt="name">
    <h3 class="my-3">{{ name }}</h3>
    <h5 class="position-absolute bottom-0 start-50 translate-middle">{{ archetype }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      image: this.cardData.card_images[0].image_url,
      name: this.cardData.name,
      archetype: this.cardData.archetype,
    }
  },
  props: {
    cardData : Object,
  }
}
</script>

<style lang="scss" scoped>
.card {
}  
</style>