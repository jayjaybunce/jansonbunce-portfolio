const express = require('express')
const router = express.Router()


/* GET home page. */
router.get('/', function (req, res, next) {
    const someData = {
      birthdate: '01/29/1996',
      name: 'Janson',
    }
    res.json(someData)
})

module.exports = router
