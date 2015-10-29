var HtmlWebpack = require('html-webpack-plugin')

module.exports = {

  entry: './src/index.js',

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  module: {
    loaders: [

      {
        test: /(\.js$|\.jsx$)/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      {
        test: /\.css$/,
        loaders: ['style', 'css', 'cssnext', 'autoprefixer']
      }

    ]
  },

  devServer: {
    contentBase: 'src/',
    historyApiFallback: true,
    hot: true,
    // inline: true,
    progress: true
  },

  plugins: [
    new HtmlWebpack({
      title: 'Anthony webpack'
    })
  ]

}
