const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const path = require('path')

module.exports = {
  mode: env,
  devtool: env === 'production'? 'source-map': 'inline-source-map',
  module: {
    rules: [{
      test: /\.m?js$/,
      include: path.resolve(__dirname, 'src'),
      // exclude: path.resolve(__dirname, 'src/static'),
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                "targets": {"ie": "10"},
                "useBuiltIns": "usage",
                "corejs": "3"
              }
            ]
          ]
        }
      }
    }, 
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'asset/images/[name][ext]'
      }
    },
    {
      test: /\.css$/i,
      type: 'asset/resource',
      generator: {
        filename: 'asset/styles/[name][ext]'
      }
    },
    {
      test: /\.((woff)|(woff2)|(eot)|(ttf)|(otf))$/i,
      type: 'asset/resource',
      generator: {
        filename: 'asset/fonts/[name][ext]'
      },
      include: [path.resolve(__dirname, 'node_modules/@lyufudi/uikit-v2/dist')]
    },
    {
      test: /\.(js)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'asset/plugins/[name][ext]'
      },
      include: [
        path.resolve(__dirname, 'node_modules/@lyufudi/uikit/dist'),
        path.resolve(__dirname, 'node_modules/jquery-lts/dist'),
        path.resolve(__dirname, 'node_modules/dom4'),
        path.resolve(__dirname, 'node_modules/showmodaldialog'),
        path.resolve(__dirname, 'node_modules/chart.js/dist')
      ]
    },
    {
      test: /\.(js)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'asset/plugins/compatible/[name][ext]'
      },
      include: [
        path.resolve(__dirname, 'node_modules/@lyufudi/uikit-v2/dist'),
        path.resolve(__dirname, 'node_modules/jquery-v2/dist'),
      ]
    }]
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src')
    }
  },
  watch: env === 'development'? true: false,
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: /node_modules/
  }
}