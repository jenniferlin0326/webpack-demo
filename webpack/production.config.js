import webpack from 'webpack'
const WebpackConfig = require('webpack-config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = new WebpackConfig.Config().extend('webpack/base.config.js').merge({
  devtool: '#source-map',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ExtractTextPlugin({
      filename: '[name].css?[hash:7]',
      allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true
    })
  ]
})
