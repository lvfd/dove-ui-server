const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'

module.exports = merge(common, {
  name: 'dovepay',
  entry: {
    'dovepay.main': './src/dovepay/main',
    'dovepay.system-index': './src/dovepay/system-index',
    'dovepay.exceptionPage': './src/dovepay/exceptionPage',
    // 'dovepay-payment.accaActPay': './src/dovepay-payment/accaActPay',
    // 'dovepay-payment.accaBankPay': './src/dovepay-payment/accaBankPay',
    // 'dovepay-payment.vendor': './src/dovepay-payment/vendor'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          filename: (pathData) => `dovepay/${pathData.chunk.name}${env === 'production'? '.min.': '.'}js`,
          chunks: 'initial',
          minChunks: 2,
        },
        libs: {
          name: 'libs',
          filename: (pathData) => `dovepay/${pathData.chunk.name}${env === 'production'? '.min.': '.'}js`,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  }
})