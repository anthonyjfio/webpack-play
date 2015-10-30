var HtmlWebpack = require('html-webpack-plugin')
    OpenBrowser = require('open-browser-webpack-plugin')
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
        loader: ExtractText.extract(
          'style',
          'css!cssnext!autoprefixer'
        )
      },

      // {
      //   test: /\.css$/,
      //   loaders: [
      //     'style',
      //     'css',
      //     'cssnext',
      //     'autoprefixer'
      //   ]
      // },

      {
        test: /\.(otf|eot|ttf|woff)$/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },

  devServer: {
    contentBase: 'src/',
    historyApiFallback: true,
    hot: true,
    progress: true,
    debug: true
  },

  plugins: [
    new HtmlWebpack({
      title: 'Anthony webpack',
      author: 'Anthony Fiorani',
      description: 'testing out webpack',
      template: 'src/index.html',
      inject: true
    }),
    new OpenBrowser({
      url: 'http://localhost:8080/webpack-dev-server/'
    }),
    new ExtractText('[name].css')
  ]

}
