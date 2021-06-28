const yargs = require('yargs')
const productsApi = require('./products.api');

yargs
    .version('1.0.0')
    .usage('Usage: <command> [options]')
    .command({
        command: 'sum',
        describe: 'Sum',
        handler: async () => {
            const products = await productsApi
            const sum = products.map(product => product.price * product.count).reduce((a, b) => a + b)
            console.log(`Sum: ${sum}`)
        }
    })
    .command({
        command: 'avg',
        describe: 'Avg',
        handler: async () => {
            const products = await productsApi
            const avg = products.reduce((acc, curr) => acc + curr.price, 0) / products.length
            console.log(`Avg: ${avg}`)
        }
    })
    .command({
        command: 'lessthan',
        describe: 'Lessthan',
        builder: {
            count: {
                alias: 'c',
                describe: '',
                type: 'number',
                demandOption: true
            }
        },
        handler: async ({ count }) => {
            const products = await productsApi
            console.log(products.filter(product => product.count < count))
        }
    })
    .locale('en')
    .strict()
    .help()
    .parse()