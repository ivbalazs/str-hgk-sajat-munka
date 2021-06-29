const logger = (url, method) => {
    let month = new Date().getMonth() + 1;
    (month < 10) ? month = `0${month}` : month;
    console.log(`Date: ${new Date().getFullYear()}.${month}.${new Date().getDate()} Url: ${url} Method: ${method}`)
}

module.exports = logger