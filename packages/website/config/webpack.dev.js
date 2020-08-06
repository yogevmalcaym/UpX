const merge = require('webpack-merge');
const {resolve} = require('path');

const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        host: '0.0.0.0',
        port: 4040,
        hot: true,
        historyApiFallback: true
    },
    resolve: {
        alias: {
            store: resolve(__dirname, '../src/store')
        },
    }
});
