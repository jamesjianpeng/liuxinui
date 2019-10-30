/**
 * @file 生产环境下的配置
 * @author jamesjianpeng
 */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
let prodConf = require('../webpack/webpack.prod.conf');
const vueConf = require('../webpack/webpack.vue.conf');
const rm = require('rimraf');

const argv = Array.from(process.argv)

/**  #region only compiler Vue */
if (argv.includes('vue')) {
    prodConf = merge(vueConf, prodConf)
}
/**  #endregion */
rm(path.resolve(__dirname, '../dist'),(err) => {
  if (err) return;
  webpack(prodConf, function(err, stats) {
      if (err) throw err;
      if (stats.hasErrors()) {
          console.log(stats, 'has errors end');
      } else {
          console.log('webpack TypeScript and Threejs project finish!')
      }
  })
})
