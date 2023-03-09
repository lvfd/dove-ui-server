const path = require('path')
const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const { dirname } = require('../project.config')

module.exports = {
  name: 'limit-browser',
  mode: env,
  entry: {
    'limit-browser': './src/limit-browser'
  },
  output: {
    filename: env === 'production'? '[name].min.js': '[name].js',
    path: path.resolve(process.cwd(), 'release')
  }
}