var webpack = require('webpack')
    HtmlWebpack = require('html-webpack-plugin')
    OpenBrowser = require('open-browser-webpack-plugin')

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/only-dev-server',
    './src/entry'
  ],

  debug: true,
  devtool: '#source-map',
  output: {
    pathinfo: true
  },

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
      {
        test: /\.(otf|eot|ttf|woff)$/,
        exclude: /node_modules/,
        loader: 'file'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /node_modules/,
        loader: 'file'
      }
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

}
