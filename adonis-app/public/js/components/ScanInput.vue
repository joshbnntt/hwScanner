<template>
<div>
    <div>
        <label for="scannedBarcodes">Scanned Barcodes</label>
        <textarea 
            v-model="barcodes"
            name="scannedBarcodes" 
            id="scannedBarcodes"
            cols="30" 
            rows="10"
            autofocus
            @keyup.enter="storeBarcodes"></textarea>
        <button @click="storeBarcodes">Save</button>
    </div>
    <div class="response" v-if="response !== {}">
        <h3>Response</h3>
        <table>
            <tr>
                <th>HW</th>
                <th>Lot</th>
                <th>Other</th>
            </tr>
            <tr v-for="item in response">
                <td>{{item.hw}}</td>
                <td>{{item.lt}}</td>
                <td>{{item.rf}}</td>
            </tr>

        </table>
    </div>
    <div class="error" v-else-if="error !== {}">
        <h3>Error</h3>
        {{error}}
    </div>
    <div v-else></div>
</div>

</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                barcodes:'',
                response: [],
                error: {}
            }
        },
        methods: {
            storeBarcodes() {
                const barcodes = this.barcodes.trim()
                this.barcodes = ''
                this.error = {}
                document.getElementById('scannedBarcodes').focus()
                let barcodesArray = barcodes.split('\n')
                let parsedBarcodes = []
                for(let barcodeIndex in barcodesArray) {
                    let set = barcodesArray[barcodeIndex].split(' ')
                    let obj = {} 
                    for(let setIndex in set) {
                        let prefix = set[setIndex].split(/[\d]{1}/)[0]
                        obj[prefix] = set[setIndex].substring(prefix.length, set[setIndex].length)
                    }
                    parsedBarcodes.push(obj) //= Object.assign({}, parsedBarcodes, obj)
                }
                this.response = [...this.response, ...parsedBarcodes]
                // axios.post('/store', {
                //     scannedBarcodes:barcodes
                // })
                // .then((response) => {
                //     console.log('response', response)
                //     this.response.push(response.data[0])
                // })
                // .catch((error) => {
                //     console.error('error', error)
                //     this.error = error
                // })
            }
        }

    }
</script>