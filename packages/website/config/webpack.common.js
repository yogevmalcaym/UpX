const {resolve} = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [resolve(__dirname, '../src/index.jsx')],
    output: {
        filename: '[name].[hash].js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel'],
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Website",
            template: resolve(__dirname, '../public/index.html'),
        }),
    ]
}
