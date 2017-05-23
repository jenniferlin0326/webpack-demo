const path = require('path')

module.exports = {
    env: require('./env'),
    cssSourceMap: false,
    assetBuildPath: path.resolve(__dirname, '..', '..', 'build'),
    webpackDevServerPort: 3100,
    browserSyncPort: 4000
}
