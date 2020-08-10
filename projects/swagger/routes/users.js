const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource')
})

router.post('/login', function (req, res) {
    console.log(req.body)
    res.sendStatus(200, 'thank you')
})


module.exports = router
 