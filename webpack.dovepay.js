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
    'dovepay-payment.accaActPay': './src/dovepay-payment/accaActPay',
    'dovepay-payment.accaBankPay': './src/dovepay-payment/accaBankPay',
    'dovepay-payment.vendor': './src/dovepay-payment/vendor'
  },
  output: {
    clean: true,
    // path: path.resolve(__dirname, '..', '..', 'git/dovePay/src/main/webapp/node/dovepay-ui'):
    path: path.resolve(__dirname, 'release'),
    filename: (pathData) => {
      const name = pathData.chunk.name.split('.').join('/')
      return 'production'? `${name}.min.js`: `${name}.js`
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          filename: env === 'production'? '[name].min.js': '[name].js',
          chunks: 'initial',
          minChunks: 2,
        },
        libs: {
          name: 'libs',
          filename: env === 'production'? '[name].min.js': '[name].js',
          test: /[\\/]node_modules[\\/]/,
        }
      }
    }
  }
})