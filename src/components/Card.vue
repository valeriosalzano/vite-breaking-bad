<template>
  <div class="card text-bg-dark text-center pb-5 h-100 position-relative">
    <img class="img-fluid" :src="cardData.card_images[0].image_url" :alt="cardData.name">
    <h3 class="my-3">{{ cardData.name }}</h3>
    <h5 class="position-absolute bottom-0 start-50 translate-middle">{{ cardData.archetype }}</h5>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    cardData : Object,
  }
}
</script>

<style lang="scss" scoped>

</style>