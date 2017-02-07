<template>
<div>
    <div>
        <label for="scannedBarcodes">Scanned Barcodes</label>
        <textarea 
            v-model="barcodes"
            name="scannedBarcodes" 
            id="scannedBarcodes"
            row="30"
            autofocus
            @keyup.enter="parseBarcodes"></textarea>
    </div>
    <div class="numbers" >
        <h3></h3>
        <table>
            <tr>
                <th>HW</th>
                <th>Lot</th>
                <th>Other</th>
            </tr>
            <tr v-for="item in parsedBarcodes">
                <td>{{item.hw}}</td>
                <td>{{item.lt}}</td>
                <td>{{item.rf}}</td>
            </tr>

        </table>  
        <button @click="storeBarcodes">Save</button>
    </div>
    <div class="response">
        {{response}}
    </div>
    <div class="error" v-if="error !== {}">
        <h3>Error</h3>
        {{error}}
    </div>
</div>

</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                barcodes:'',
                parsedBarcodes: [],
                response: [],
                error: {}
            }
        },
        methods: {
            parseBarcodes() {
                const barcodes = this.barcodes.trim()
                this.barcodes = ''
                let barcodesArray = barcodes.split('\n')
                let parsedBarcodes = []
                for(let barcodeIndex in barcodesArray) {
                    let set = barcodesArray[barcodeIndex].split(' ')
                    let obj = {} 
                    for(let setIndex in set) {
                        let prefix = set[setIndex].split(/[\d]{1}/)[0]
                        obj[prefix] = set[setIndex].substring(prefix.length, set[setIndex].length)
                    }
                    parsedBarcodes.push(obj)
                }
                this.parsedBarcodes = [...this.parsedBarcodes, ...parsedBarcodes]
                
            },
            storeBarcodes() {
                let barcodes = this.parsedBarcodes
                this.error = {}
                document.getElementById('scannedBarcodes').focus()
                axios.post('/store', {
                    parsedBarcodes:barcodes
                })
                .then((response) => {
                    console.log('response', response)
                    this.response = response.data
                })
                .catch((error) => {
                    console.error('error', error)
                    this.error = error
                })
            }
        }

    }
</script>

<style>
    #scannedBarcodes {
        width:100%;
    }
</style>