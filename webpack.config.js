const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('./config')

module.exports = {
  entry: {
    app: ['./src/main.js', require.resolve('webpack-dev-server/client') + '?/', require.resolve('webpack/hot/dev-server')],
    style: ['./src/css/application.sass']
  },
  output: {
    path: config.assetBuildPath,
    publicPath: '',
    filename: '[name].js?[hash:7]'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s[ac]ss$/,
        use: ExtractTextPlugin.extract({
          use: [
            'css-loader',
            'postcss-loader',
            'sass-loader'
          ]
        })
      },
      {
        test: /img\/.*\.(png|jpg|jpeg|gif|svg)(\?[a-z0-9-]+)?$/,
        loader: 'file-loader?name=[path][name]-[hash:7].[ext]'
      },
      {
        test: /font\/.*\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9-]+)?$/,
        loader: 'file-loader?name=[path][name]-[hash:7].[ext]'
      }
    ]
  },
  plugins: [
     new webpack.DefinePlugin({
        'process.env': config.env
      }),
      new ExtractTextPlugin({ filename: '[name].css?[hash:7]', allChunks: true }),
      new webpack.HotModuleReplacementPlugin(),
      // new webpack.optimize.UglifyJsPlugin()
  ]
}
