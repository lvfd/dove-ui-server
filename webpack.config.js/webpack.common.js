const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const path = require('path')
const { platform, dirname } = require('../project.config')

module.exports = {
  name: 'common',
  mode: env,
  devtool: env === 'production'? 'source-map': 'inline-source-map',
  output: {
    clean: env === 'production'? false: true,
    path: path.resolve(dirname, env === 'production'? 'release': 'test'),
    publicPath: `${platform}/dove-us/${env === 'production'? 'release': 'test'}/`,
    filename: (pathData) => {
      const name = pathData.chunk.name.split('.').join('/')
      return env === 'production'? `${name}.min.js`: `${name}.js`
    }
  },
  module: {
    generator: {
      'asset/resource': {
        publicPath: `${platform}/dove-us/${env === 'production'? 'release': 'test'}/asset/`,
        outputPath: 'asset/'
      }
    },
    rules: [{
      test: /\.m?js$/,
      include: path.resolve(dirname, 'src'),
      // exclude: path.resolve(dirname, 'src/static'),
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
        filename: 'images/[name][ext]'
      }
    },
    {
      test: /\.css$/i,
      type: 'asset/resource',
      generator: {
        filename: 'styles/[name][ext]'
      }
    },
    {
      test: /\.((woff)|(woff2)|(eot)|(ttf)|(otf))$/i,
      type: 'asset/resource',
      generator: {
        filename: 'fonts/[name][ext]'
      },
      include: [path.resolve(dirname, 'node_modules/@lyufudi/uikit-v2/dist')]
    },
    {
      test: /\.(js)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'plugins/[name][ext]'
      },
      include: [
        path.resolve(dirname, 'node_modules/@lyufudi/uikit/dist'),
        path.resolve(dirname, 'node_modules/jquery-lts/dist'),
        path.resolve(dirname, 'node_modules/dom4'),
        path.resolve(dirname, 'node_modules/showmodaldialog'),
        path.resolve(dirname, 'node_modules/chart.js/dist')
      ]
    },
    {
      test: /\.(js)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'plugins/compatible/[name][ext]'
      },
      include: [
        path.resolve(dirname, 'node_modules/@lyufudi/uikit-v2/dist'),
        path.resolve(dirname, 'node_modules/jquery-v2/dist'),
      ]
    }]
  },
  resolve: {
    alias: {
      '@src': path.resolve(dirname, 'src'),
      '@lyufudi/dove-utils': env === 'production'? '@lyufudi/dove-utils': path.resolve(dirname, '..', 'dove-utils')
    }
  },
  watch: env === 'development'? true: false,
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: /node_modules/
  }
}