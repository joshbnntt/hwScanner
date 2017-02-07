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
        let data = request.only('parsedBarcodes')
        console.log('data', ...data.parsedBarcodes)
        let returnData = [...data.parsedBarcodes]
        response.json(returnData)
    }
}

module.exports = ScannerController
