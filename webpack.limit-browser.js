const path = require('path')
const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
module.exports = {
  name: 'limit-browser',
  mode: env,
  entry: {
    'limit-browser': './src/limit-browser'
  },
  output: {
    filename: env === 'production'? '[name].min.js': '[name].js',
    path: path.resolve(__dirname, 'release')
  }
}