/**
 * @file 只构建 Vue
 * @author jamesjianpeng
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
const { webpackEntry, webpackHtmlTemplate } = require('../build/router')

module.exports = {
    mode: 'none',
    entry: webpackEntry(),
    output: {
        path: path.resolve(__dirname, '../dist'),
        publicPath: './',
        filename: (chunkData) => {
          const chunkName = chunkData.chunk.name
          console.log(chunkName + '<---------')
          return `${chunkName}/[name].js`;
        }
    },
    resolve: {
        alias: {
          /**
           * @todo https://cn.vuejs.org/v2/guide/installation.html#%E8%BF%90%E8%A1%8C%E6%97%B6-%E7%BC%96%E8%AF%91%E5%99%A8-vs-%E5%8F%AA%E5%8C%85%E5%90%AB%E8%BF%90%E8%A1%8C%E6%97%B6
           * 需要编译
           */
           'vue$': 'vue/dist/vue.esm.js',
           '@': path.resolve(__dirname, '../src'),
        }
    },
    optimization: {
      // splitChunks: {
      //   chunks: (chunk) => {
      //     return true;
      //   },
      // }
    },
    externals: {
        // vue: 'Vue', // 需要知道库中暴露出来的 name，key 是我们在项目 import Vue from 'vue', value 就是 资源中暴露出来的名字
        // 'vue-router': 'VueRouter'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
              test: /\.ts?$/,
              use: 'ts-loader',
              include: path.resolve(__dirname, '../src/example/typescript-play/'),
              exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        ...webpackHtmlTemplate(HtmlWebpackPlugin)
    ]
};
