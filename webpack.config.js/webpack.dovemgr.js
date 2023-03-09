const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'

module.exports = merge(common, {
  name: 'dovemgr',
  entry: {
    'dovemgr.main': './src/dovemgr/main'
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        commons: {
          name: 'commons',
          filename: (pathData) => `dovemgr/${pathData.chunk.name}${env === 'production'? '.min.': '.'}js`,
          chunks: 'initial',
          minChunks: 2,
        },
        libs: {
          name: 'libs',
          filename: (pathData) => `dovemgr/${pathData.chunk.name}${env === 'production'? '.min.': '.'}js`,
          test: /[\\/]node_modules[\\/]/,
        }
      }
    }
  }
})