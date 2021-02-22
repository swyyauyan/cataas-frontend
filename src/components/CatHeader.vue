<template>
  <div class="cat-header">
    <p>
      <img src="../assets/cat_icon_1.png" /> - FIND YOUR CAT -
      <img src="../assets/cat_icon_1.png" />
    </p>
  </div>
</template>

<script>
export default {
  name: 'CatHeader',
  components: {}
}
</script>

<style lang="sass">
.cat-header
  border: 1px solid #ccc
  margin: 0
  height: 10%
  background-color: black
.cat-header p
  color: white
  padding-top: 5px
.cat-header img
  height: $iconHeight
</style>
