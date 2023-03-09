const dovepay = require('./webpack.dovepay')
const dovepayPayment = require('./webpack.dovepay-payment')
const dovemgr = require('./webpack.dovemgr')
const limitBrowser = require('./webpack.limit-browser')

module.exports = [ dovepay, dovepayPayment, dovemgr, limitBrowser]