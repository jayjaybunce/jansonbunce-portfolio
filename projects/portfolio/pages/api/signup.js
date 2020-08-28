import { processEnv } from 'next/dist/lib/load-env-config'

const jwt = require('jsonwebtoken')
const User = require('../../models/user')
const SECRET = process.env.SECRET

function createJWT(user) {
    return jwt.sign({ user }, SECRET, { expiresIn: '24h' })
}

export default (req, res) => {
    if (req.method === 'POST') {
        const user = new User(req.body)
        const token = createJWT(user)
        res.setHeader('Content-Type', 'application/json')
        res.statusCode = 200
        res.json({ token })
    } else {
        res.end('This is a protected route - Please send credentials to authenticate your sessions')
    }
}