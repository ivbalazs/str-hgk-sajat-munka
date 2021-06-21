const utils = require('./utils')

const users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 18
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 17
    }
]

console.log('generateUserList: ', utils.generateUserList(users))
console.log('getUserNames:', utils.getUserNames(users))