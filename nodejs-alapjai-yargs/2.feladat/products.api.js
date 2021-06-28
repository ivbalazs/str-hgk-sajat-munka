const { readFile } = require('fs').promises

const productsApi = (async () => {
    const dataString = await readFile('./products.json')
    return JSON.parse(dataString)['products']
})()

module.exports = productsApi;