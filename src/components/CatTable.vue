<template>
  <div class="cat-table-view">
    <hr>
    <table class="cat-table">
        <tr v-for="(a, i) in +catTableRow" v-bind:key="i">
            <td v-for="(b, j) in +catTableCol" v-bind:key="j">
            <img @click="clickMethod(catPhoto[getCounter(b, i)])" class="cat-table-result" v-bind:src="catPhoto[getCounter(b, i)]||'/assets/cat_wait.gif'" >
            </td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'CatTable',
  props: ['catTableCol', 'catTableRow', 'catPhoto'],
  methods: {
    getCounter: function (b, i) {
      return (Number(b) + Number(i) * Number(this.catTableCol)) - 1
    },
    clickMethod: function (url) {
      if (url) {
        window.open(url, '_blank')
      }
    }
  }
}
</script>

<style lang="sass">
.cat-table-view
    clear: both
.cat-table
    margin-left: auto
    margin-right: auto
    text-align: left
td
    width: $tableFieldWidth
    height: $tableFieldHeight
.cat-table-result
    width: 100%
    height: $imageHeight
    object-fit: cover
hr
    width: 60%

</style>
