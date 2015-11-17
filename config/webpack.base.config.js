var webpack = require('webpack')
    HtmlWebpack = require('html-webpack-plugin')
    pkg = require('../package.json')

module.exports = {

  extensions: ['', '.js', '.jsx'],

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
