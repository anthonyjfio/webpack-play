var webpack = require('webpack')
    HtmlWebpack = require('html-webpack-plugin')
    pkg = require('../package.json')

module.exports = {

  extensions: ['', '.js', '.jsx'],

  module: {
    loaders: [
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
        test: /\.ico$/,
        exclude: /node_modules/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpack({
      title: pkg.name,
      author: pkg.author.name,
      description: pkg.description,
      version: pkg.version,
      template: './src/index.html',
      favicon: './src/favicon.ico',
      inject: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      }
    })
  ]
}
