const path = require('path')
// const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const { node_env, dirname } = require('../project.config')

module.exports = {
  name: 'limit-browser',
  mode: node_env,
  entry: {
    'limit-browser': './src/limit-browser'
  },
  output: {
    // filename: env === 'production'? '[name].min.js': '[name].js',
    filename: '[name].min.js',
    path: path.resolve(process.cwd(), 'release')
  }
}