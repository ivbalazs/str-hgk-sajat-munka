const increaseAndFormatDate = require('./utils')

const dates = [
    new Date(Date.UTC(2021, 0, 28)),
    new Date(Date.UTC(2021, 1, 28)),
    new Date(Date.UTC(2021, 2, 28))
]

console.log('increaseAndFormatDate: ', increaseAndFormatDate(dates))