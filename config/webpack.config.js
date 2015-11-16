var merge = require('webpack-merge')
    baseConfig = require('./webpack.base.config.js')
    devConfig = require('./webpack.dev.config.js')
    prodConfig = require('./webpack.prod.config.js')
    TARGET = process.env.npm_lifecycle_event

if (TARGET === 'start') {
  module.exports = merge(baseConfig, devConfig)
}

if (TARGET === 'build') {
  module.exports = merge(baseConfig, prodConfig)
}
