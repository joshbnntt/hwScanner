<template>
<div>
    <div class="response">
        <label for="scannedBarcodes">Scanned Barcodes</label>
        <textarea 
            v-model="barcodes"
            name="scannedBarcodes" 
            id="scannedBarcodes" 
            cols="30" 
            rows="10"></textarea>
    </div>
    <div>
        {{barcodes}}
    </div>
</div>

</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                barcodes:''
            }
        }
    }
</script>