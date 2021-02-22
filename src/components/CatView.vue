<template>
  <div class="cat-view">
    <div class="cat-input">
      <br />
      <p>How many cat(s) you want?</p>
      <br />
      <div>
        <label
          ><img class="cat-view-icon" src="../assets/cat_icon_2.png" /> in row:
        </label>
        <input
          @change="getPictures"
          v-model="catTableRow"
          type="number"
          id="catTableRow"
          name="catTableRow"
          :disabled="isDisabled"
        />
      </div>
      <div>
        <label
          ><img class="cat-view-icon" src="../assets/cat_icon_3.png" /> in
          column:
        </label>
        <input
          @change="getPictures"
          v-model="catTableCol"
          type="number"
          id="catTableCol"
          name="catTableCol"
          :disabled="isDisabled"
        />
      </div>
      <br />
      <p>
        <img class="cat-view-icon" src="../assets/cat_icon_2.png" /> Special
        requirement...?
        <img class="cat-view-icon" src="../assets/cat_icon_2.png" />
      </p>
      <button v-on:click="getMovingCats" id="buttonGetMoveCat">
        Get moving cats!
      </button>
      <br />
      <br />
      <div>
        <label> Want your cat to say something? </label>
        <input v-model="catSay" type="text" id="catSay" name="catSay" /><button
          v-on:click="getTalkingCat"
        >
          Go!
        </button>
      </div>
    </div>
    <CatTable
      v-bind:catTableCol="catTableCol"
      v-bind:catTableRow="catTableRow"
      v-bind:catPhoto="catPhoto"
    />
  </div>
</template>

<script>
import CatTable from './CatTable'

export default {
  name: 'CatView',
  components: {
    CatTable
  },
  data: () => ({
    catTableCol: 3,
    catTableRow: 3,
    catPhoto: [],
    catSay: 'Hello!',
    isMovingCat: false,
    isTalkingCat: false
  }),
  created () {
    this.getPictures()
  },
  computed: {
    isDisabled () {
      return this.isMovingCat === true || this.isTalkingCat === true
    }
  },
  methods: {
    getTalkingCat: async function (event) {
      this.catPhoto = []
      this.isMovingCat = false
      this.isTalkingCat = true
      this.getPictures(event)
    },
    getMovingCats: async function (event) {
      this.catPhoto = []
      this.isTalkingCat = false
      this.isMovingCat = true
      this.getPictures(event)
    },
    getPictures: async function (event) {
      const currectSize = this.catPhoto.length
      const total = this.catTableCol * this.catTableRow
      const additionalCall = total - currectSize
      console.log('additionalCall = ' + additionalCall)
      if (additionalCall > 0) {
        var apiUrl = process.env.VUE_APP_BACKEND_HOST + '/cats'
        if (this.isTalkingCat) {
          apiUrl =
            process.env.VUE_APP_BACKEND_HOST + '/cats?text=' + this.catSay
        } else if (this.isMovingCat) {
          apiUrl = process.env.VUE_APP_BACKEND_HOST + '/cats?gif=true'
        }
        // eslint-disable-next-line no-unused-vars
        for await (const step of new Array(total).fill(1)) {
          const response = await fetch(apiUrl)
          const imageUrl = URL.createObjectURL(await response.blob())
          this.catPhoto.push(imageUrl)
        }
      }
      console.log('this.catPhoto.length = ' + this.catPhoto.length)
    }
  }
}
</script>

<style lang="sass">
.cat-view
  margin: 0 auto
  border: 1px solid #ccc
.cat-view-icon
  height: $iconHeight
</style>
