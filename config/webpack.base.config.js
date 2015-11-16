var webpack = require('webpack')
    HtmlWebpack = require('html-webpack-plugin')
    pkg = require('../package.json')

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './src/entry'
  ],

  extensions: ['', '.js', '.jsx'],

  module: {
    loaders: [
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
      title: pkg.name,
      author: pkg.author.name,
      description: pkg.description,
      template: './src/index.html',
      inject: true
    })
  ]
}
