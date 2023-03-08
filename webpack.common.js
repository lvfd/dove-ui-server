const env = process.env.NODE_ENV? process.env.NODE_ENV: 'production'
const path = require('path')

module.exports = {
  name: 'common',
  mode: env,
  devtool: env === 'production'? 'source-map': 'inline-source-map',
  output: {
    clean: env === 'production'? false: true,
    path: path.resolve(__dirname, env === 'production'? 'release': 'test'),
    filename: (pathData) => {
      const name = pathData.chunk.name.split('.').join('/')
      return env === 'production'? `${name}.min.js`: `${name}.js`
    }
  },
  module: {
    generator: {
      'asset/resource': {
        outputPath: 'asset/'
      }
    },
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
      include: [path.resolve(__dirname, 'node_modules/@lyufudi/uikit-v2/dist')]
    },
    {
      test: /\.(js)$/i,
      type: 'asset/resource',
      generator: {
        filename: 'plugins/[name][ext]'
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
        filename: 'plugins/compatible/[name][ext]'
      },
      include: [
        path.resolve(__dirname, 'node_modules/@lyufudi/uikit-v2/dist'),
        path.resolve(__dirname, 'node_modules/jquery-v2/dist'),
      ]
    }]
  },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@lyufudi/dove-utils': env === 'production'? '@lyufudi/dove-utils': path.resolve(__dirname, '..', 'dove-utils')
    }
  },
  watch: env === 'development'? true: false,
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: /node_modules/
  }
}