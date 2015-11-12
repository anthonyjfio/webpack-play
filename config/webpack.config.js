var HtmlWebpack = require('html-webpack-plugin')
    ExtractText = require('extract-text-webpack-plugin')

module.exports = {

  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [

      {
        test: /\.(js|jsx|babel)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractText.extract(
          'style',
          'css!cssnext!autoprefixer'
        )
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
    new HtmlWebpack({
      title: 'Anthony webpack',
      author: 'Anthony Fiorani',
      description: 'testing out webpack',
      template: 'src/index.html',
      inject: true
    }),
    new ExtractText('[name].css')
  ]

}
