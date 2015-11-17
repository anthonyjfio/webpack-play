var webpack = require('webpack')
    ExtractText = require('extract-text-webpack-plugin')
    Clean = require('clean-webpack-plugin')

module.exports = {
  
  entry: './src/entry.js',

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
      },
      {
        test: /\.(otf|eot|ttf|woff)$/,
        exclude: /node_modules/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        exclude: /node_modules/,
        loaders: [
          'image-webpack?optimizationLevel=7',
          'url-loader?name=[name].[ext]&limit=8192'
        ]
      }
    ]
  },

  plugins: [
    new ExtractText('[name]-[hash].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
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
