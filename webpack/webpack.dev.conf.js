/**
 * @file 本地开发环境下的关键配置
 * @author jamesjianpeng
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'), // 使用相对于 dev.conf 配置的绝对路径
        // contentBase: './dist', // 第二种方式 相对于 package.json 这一层
        hot: true,
        host: '0.0.0.0',
        open: true,
        port: 8099,
        /**
         *  @todo historyApiFallback 是在 ./build/local-dev.js 中配置
         *  historyApiFallback: {},
         */
        overlay: true // 在浏览器端展示错误
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
