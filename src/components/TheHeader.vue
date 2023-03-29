<template>
  <div id="the-header">
    <h1 class="my-3 text-center display-2 font"> {{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header Title',
  props: {
    title: String,
  },
}
</script>

<style lang="scss">

</style>