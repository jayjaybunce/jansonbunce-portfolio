const withFonts = require('next-fonts')
config = withFonts({
    webpack(config, options) {
        return config
    },
})

module.exports = config