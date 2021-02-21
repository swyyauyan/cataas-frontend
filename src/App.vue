<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <cat-header></cat-header>
    <cat-view></cat-view>
  </div>
</template>

<script>
import CatHeader from './components/CatHeader.vue'
import CatView from './components/CatView.vue'

export default {
  name: 'App',
  components: {
    'cat-header': CatHeader,
    'cat-view': CatView
  }
}
</script>

<style lang="sass">

#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  width: 100%

</style>
