var webpack = require('webpack')
    HtmlWebpack = require('html-webpack-plugin')
    ExtractText = require('extract-text-webpack-plugin')
    OpenBrowser = require('open-browser-webpack-plugin')
    merge = require('webpack-merge')
    TARGET = process.env.npm_lifecycle_event

var baseConfig = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './src/entry'
  ],

  output: {
    path: __dirname + '/dist',
    filename: 'bundle-[hash].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx|babel)$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel']
      },

      {
        test: /\.(otf|eot|ttf|woff)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpack({
      title: 'Anthony webpack',
      author: 'Anthony Fiorani',
      description: 'testing out webpack',
      template: 'src/index.html',
      inject: true
    })
  ]
}

if (TARGET === 'start') {
  module.exports = merge(baseConfig, {
    debug: true,
    entry: [
      'webpack-dev-server/client?http://localhost:8080/',
      'webpack/hot/only-dev-server',
      './src/entry'
    ],
    module: {
      loaders: [
        {
          test: /\.(js|jsx|babel)$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel']
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loaders: ['style','css', 'cssnext', 'autoprefixer']
        },
      ]
    },
    devServer: {
      contentBase: 'src/',
      inline: true,
      hot: true
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new OpenBrowser({
        url: 'http://localhost:8080/webpack-dev-server/'
      })
    ],
  })
}

if (TARGET === 'build') {
  module.exports = merge(baseConfig, {
    entry: './src/entry',
    module: {
      loaders: [
        {
          test: /\.(js|jsx|babel)$/,
          exclude: /node_modules/,
          loader: 'babel'
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          loader: ExtractText.extract(
            'style',
            'css!cssnext!autoprefixer'
          )
        }
      ]
    },
    plugins: [
      new ExtractText('[name]-[hash].css')
    ]
  })
}

