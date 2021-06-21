const increaseDate = (date, dayNumber = 3) => {
    return date.getTime() + dayNumber * 24 * 60 * 60 * 1000
}

const increaseAndFormatDate = (dates) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return dates.map(date => new Date(increaseDate(date)).toLocaleDateString('hu-HU', options))
}

module.exports = increaseAndFormatDate