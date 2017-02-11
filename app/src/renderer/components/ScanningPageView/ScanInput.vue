<template>
  <div>
    <div>
      <label for="scannedBarcodes">
        Scanned Barcodes
        <textarea 
          v-model="barcodes"
          name="scannedBarcodes" 
          id="scannedBarcodes"
          row="30"
          autofocus
          @keyup.enter="parseBarcodes"></textarea>
      </label>
    </div>

</template>

<script>
// import axios from 'axios'

  export default {
    data () {
      return {
        barcodes: '',
        parsedBarcodes: [],
        response: [],
        error: {}
      }
    },
    mounted () {
      document.getElementById('scannedBarcodes').focus()
    },
    methods: {
      parseBarcodes () {
        const barcodes = this.barcodes.trim()
        this.barcodes = ''
        let barcodesArray = barcodes.split('\n')
        let parsedBarcodes = []
        for (let barcodeIndex in barcodesArray) {
          let set = barcodesArray[barcodeIndex].split(' ')
          let obj = {}
          for (let setIndex in set) {
            let prefix = set[setIndex].split(/[\d]{1}/)[0].toUpperCase()
            obj[prefix] = set[setIndex].substring(prefix.length, set[setIndex].length)
          }
          parsedBarcodes.push(obj)
          this.$emit('addItem', obj)
        }
        this.parsedBarcodes = [...this.parsedBarcodes, ...parsedBarcodes]
        console.log('items', this.items)
      },
      storeBarcodes () {
        // let barcodes = this.parsedBarcodes
        // this.error = {}
        // document.getElementById('scannedBarcodes').focus()
        // axios.post('/store', {
        //     parsedBarcodes:barcodes
        // })
        // .then((response) => {
        //     console.log('response', response)
        //     this.response = response.data
        // })
        // .catch((error) => {
        //     console.error('error', error)
        //     this.error = error
        // })
      }
    }

  }
</script>

<style>
  #scannedBarcodes {
    width:100%;
  }
  .numbers {
    width:100%;
    height:300px;
  }
  .numbers-table {
    width:80%;
  }
</style>
