const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'

module.exports = merge(common, {
  name: 'dovepay',
  entry: {
    'dovepay-payment.accaActPay': './src/dovepay-payment/accaActPay',
    'dovepay-payment.accaBankPay': './src/dovepay-payment/accaBankPay',
    'dovepay-payment.vendor': './src/dovepay-payment/vendor'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          filename: (pathData) => `dovepay-payment/${pathData.chunk.name}${env === 'production'? '.min.': '.'}js`,
          chunks: 'initial',
          minChunks: 2,
        },
        libs: {
          name: 'libs',
          filename: (pathData) => `dovepay-payment/${pathData.chunk.name}${env === 'production'? '.min.': '.'}js`,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  }
})