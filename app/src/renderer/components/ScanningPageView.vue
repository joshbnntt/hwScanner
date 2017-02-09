<template>
  <div>
    <h1>Scan Away</h1>

    <scan-input :items="items" v-on:addItem="addItem($event)"></scan-input>
  </div>
</template>

<script>
  import ScanInput from './ScanningPageView/ScanInput'

  export default {
    name: 'scan-page',

    computed: {
      items () {
        return this.$store.state.items.items
      }
    },
    components: {
      'scan-input': ScanInput
    },
    methods: {
      addItem (e) {
        this.$store.dispatch('addItem', e)
        console.log('e', e)
        console.log('this.items', this.items)
      }
    }
  }
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
