const generateUserList = users => {
    return users.map(user => ({
        isAdult: user.age >= 18 ? true : false,
        fullName: `${user.firstName} ${user.lastName}`
    }))
}

const getUserNames = users => users.map(user => `${user.firstName} ${user.lastName}`).join(', ')

module.exports = Object.freeze({
    generateUserList,
    getUserNames
})