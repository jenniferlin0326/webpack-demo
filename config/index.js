const dev = require('./development')
const prod = require('./production')

module.exports = process.env.NODE_ENV === 'production' ? prod : dev
