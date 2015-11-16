var webpack = require('webpack')
    ExtractText = require('extract-text-webpack-plugin')
    Clean = require('clean-webpack-plugin')

module.exports = {
  
  output: {
    path: __dirname + '/../dist',
    filename: 'bundle-[hash].js'
  },

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
    new ExtractText('[name]-[hash].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      },
      compress: {
        warnings: false
      }
    }),
    new Clean('../dist')
  ]

}
