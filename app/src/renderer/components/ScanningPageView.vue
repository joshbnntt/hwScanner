<template>
  <div>
    <h1>Scan Away</h1>

    <scan-input :items="items" v-on:addItem="addItem($event)"></scan-input>
    <scan-output :items="items" :isDisabled="isDisabled" :elementClass="'numbers'" :tableClass="'numbers-table'" :itemClass="'item'"></scan-output>
  </div>
</template>

<script>
  import ScanInput from './ScanningPageView/ScanInput'
  import ScanOutput from './ScanningPageView/ScanOutput'

  export default {
    name: 'scan-page',
    data () {
      return {
        isDisabled: true
      }
    },
    computed: {
      items () {
        return this.$store.state.items.numbers
      }
    },
    components: {
      'scan-input': ScanInput,
      'scan-output': ScanOutput
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
  .numbers {
    width:100%;
    height:300px;
  }
  .numbers-table {
    width:80%;
  }
  .item {
    border-style: none;
    background-color:transparent;
  }
</style>
