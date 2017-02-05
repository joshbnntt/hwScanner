'use strict'

const Env = use('Env')
const hwPrefix = Env.get('HW_NUMBER_PREFIX')
const lotPrefix = Env.get('LOT_NUMBER_PREFIX')
const otherPrefix = Env.get('OTHER_NUMBER_PREFIX')

class ScannerController {
    * index (request, response) {
        yield response.sendView('scan')
    }

    store (request, response) {
        let data = request.only('scannedBarcodes')
        let barcodesArray = data.scannedBarcodes.split('\r\n')
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
        response.json(parsedBarcodes)
    }
}

module.exports = ScannerController
