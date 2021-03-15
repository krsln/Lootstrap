'use strict'

module.exports = {
    plugins: {
        // include whatever plugins you want
        // but make sure you install these via yarn or npm!

        autoprefixer: {
            // browserslist moved to .browserslistrc
            flexbox: 'no-2009', // flexbox (boolean|string): should Autoprefixer add prefixes for flexbox properties. With "no-2009" value
        }
    }
}