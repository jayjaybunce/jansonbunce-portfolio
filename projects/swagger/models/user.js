const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userShema = new Schema({
    email: {
        required: true,
        type: String,
    },
    firstName: {
        required: true,
        type: String,
    },
    lastName: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
})

userShema.set('toJSON', {
    transform(doc, ret) {
        delete ret.password
        return ret
    },
})

userShema.pre('save', function (next) {
    const user = this
    if (!user.isModified('password')) return next()
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
        if (err) return next(err)
        user.password = hash
        next()
    })
})

userShema.methods.comparePasswords = function (tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, function (err, isMatch) {
        if (err) return cb(err)
        cb(null, isMatch)
    })
}

module.exports = mongoose.model('User', userShema)
