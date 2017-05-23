const path = require('path')
const webpack = require('webpack')
const config = require('./config')

module.exports = {
  entry: './src/main.js',
  output: {
    path: config.assetBuildPath,
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
      // new webpack.optimize.UglifyJsPlugin()
  ]
}
