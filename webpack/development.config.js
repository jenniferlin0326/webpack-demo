const webpack = require('webpack')
const WebpackConfig = require('webpack-config')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const browserSyncConfig = require('./browserSync.config')

module.exports = new WebpackConfig.Config().extend('webpack/base.config.js').merge({
  devtool: '#cheap-module-eval-source-map',
  entry: {
    app: [require.resolve('webpack-dev-server/client') + '?/', require.resolve('webpack/hot/dev-server')]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin(
      browserSyncConfig,
      {
        reload: false
      }
    )
  ]
})
