const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

function createJWT(user) {
    return jwt.sign({ user }, SECRET, { expiresIn: '24h' })
}

export default (req, res) => {
    if (req.method === 'POST') {
        const token = createJWT(req.body)
        console.log(token)
        res.statusCode = 200
        res.json(token)
    } else {
        res.end(
            'This is a protected route. Please submit credentials to authenticate your session',
        )
    }
    console.log(req.body)
    res.statusCode = 200
}

