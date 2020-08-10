const mongoose = require('mongoose')
const { Schema } = mongoose

const portfolioItemSchema = new Schema({
        description: {
            required: true,
            type: String,
        },
        images: {
            required: true,
            type: Array,
        },
        tags: {
            required: true,
            type: Array,
        },
        title: {
            required: true,
            type: String,
        },
    },
    {
        timestamps: true,
    },
)

module.exports = mongoose.model('PortfolioItem', portfolioItemSchema)
