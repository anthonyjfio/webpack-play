var HtmlWebpack = require('html-webpack-plugin')
    OpenBrowser = require('open-browser-webpack-plugin')

module.exports = {
  
  debug: true,

  entry: './src/index.js',

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
        loaders: ['style','css', 'cssnext', 'autoprefixer']
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

  devServer: {
    contentBase: 'src/',
    inline: true,
    progress: true,
    debug: true,
    watch: true
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
    })
  ]

}
