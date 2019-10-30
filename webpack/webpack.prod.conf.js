/**
 * @file 打包环境下的关键配置
 * @author jamesjianpeng
 */

module.exports = {
    mode: 'production', // "production" | "development" | "none"
    target: 'web',
    output: {
      library: 'xinui', //对外暴露的属性名
      libraryTarget:'commonjs2' // 挂载到对应的环境下 commonjs2
    }
};
