const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
// const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'

module.exports = merge(common, {
  name: 'dovepay',
  entry: {
    'dovepay.main': './src/dovepay/main',
    'dovepay.system-index': './src/dovepay/system-index',
    'dovepay.exceptionPage': './src/dovepay/exceptionPage',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          // filename: (pathData) => `dovepay/${pathData.chunk.name}${env === 'production'? '.min.': '.'}js`,
          filename: (pathData) => `dovepay/${pathData.chunk.name}.min.js`,
          chunks: 'initial',
          minChunks: 2,
        },
        libs: {
          name: 'libs',
          // filename: (pathData) => `dovepay/${pathData.chunk.name}${env === 'production'? '.min.': '.'}js`,
          filename: (pathData) => `dovepay/${pathData.chunk.name}.min.js`,
          test: /[\\/]node_modules[\\/]/
        }
      }
    }
  }
})