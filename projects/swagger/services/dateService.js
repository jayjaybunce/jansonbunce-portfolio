const { LocalStorage } = require('node-localstorage')
const localStorage = new LocalStorage('./date')

const dateCheck = () => {
    if (localStorage.getItem('lastUpdated') === null) {
        const date = new Date()
        localStorage.setItem('lastUpdated', date)
    }
}

const dateCompare = () => {
    const date = new Date()
    const lastUpdated = Date.parse(localStorage.getItem('lastUpdated'))
    console.log( (date - lastUpdated) > 3600000)
    setInterval(()=> {
        const date = new Date()
        const lastUpdated = Date.parse(localStorage.getItem('lastUpdated'))
        console.log((date - lastUpdated) > 3600000)
        console.log(date - lastUpdated)
    }, 900000)
}

module.exports = {
    compare: dateCompare,
    initialize: dateCheck,
}
