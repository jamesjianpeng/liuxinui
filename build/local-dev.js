/**
 * @file 把需要用到的 configuration 都引进来，根据命令行的传参数去区分启动的服务是为某个项目服务
 * @author jamesjianpeng
 */
const merge = require('webpack-merge');
let devConf = require('../webpack/webpack.dev.conf');
const baseConf = require('../webpack/webpack.base.conf');
const vueConf = require('../webpack/webpack.vue.conf');
// const tsDevConf = require('../webpack/webpack.dev.ts.multiple.conf');
const { devScript } = require('./base-dev.js');

const argv = Array.from(process.argv)

/**  #region only compiler Vue */
if (argv.includes('vue')) {
    devConf.devServer.historyApiFallback = {
        rewrites: [
            { from: /^\//, to: '/index.html' },
            { from: /^\/toast/, to: '/toast.html' }
        ]
    };
    devConf = merge(vueConf, devConf)
}
/**  #endregion */

devScript(devConf)
