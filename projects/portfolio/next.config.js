const withFonts = require('next-fonts')
const config = withFonts({
    webpack(config, options) {
        return config
    },
})

module.exports = config
