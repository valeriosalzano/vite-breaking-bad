<template>
  <div id="the-header" class="container ">
    <div class="row py-3 align-items-center">
      <img class=" col-4" :src="getImgPath('yugioh-logo.png')" alt="yugioh logo">
      <h1 class="my-3 display-2 col-8"> {{ title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header Title',
  props: {
    title: String,
  },
  methods: {
    getImgPath(img){
      return new URL (`../assets/images/${img}`,import.meta.url).href;
    },
  }
}
</script>

<style lang="scss" scoped>

</style>