const { LocalStorage } = require('node-localstorage')
const localStorage = new LocalStorage('./date')

const dateCheck = () => {
    const lastUpdated = Date.parse(localStorage.getItem('lastUpdated'))
    const date = new Date()
    if (localStorage.getItem('lastUpdated') === null) {
        localStorage.setItem('lastUpdated', date)
    } else if (date - lastUpdated > 3600000) {
        localStorage.setItem('lastUpdated', date)
    }
}

const dateCompare = () => {
    setInterval(() => {
        const date = new Date()
        const lastUpdated = Date.parse(localStorage.getItem('lastUpdated'))
        if (date - lastUpdated > 3600000) {
            console.log('updating lastUpdated in localstorage to: ', date)
            dateCheck()
        } else {
            console.log('current stored date/time is less than one hour prior to current date/time')
        }
    }, 900000)
}

module.exports = {
    compare: dateCompare,
    initialize: dateCheck,
}
