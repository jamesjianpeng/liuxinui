/**
 * @file router 文件
 * 包括 webpack entry，html, webpack-dev-router 的部分
 */
const path = require('path')

const routerList = [
    {
      routerName: 'index',
      dirRootName: 'example/app/index.js'
    },
    {
      routerName: 'toast',
      dirRootName: 'example/toast/index.js'
    },
    {
      routerName: 'data-picker',
      dirRootName: 'example/data-picker/index.js'
    }
]

/**
 * @description
 * webpack entry
 */
 const webpackEntry = () => {
    const result = {}
    routerList.map((item) => {
      result[ item.routerName ] = path.resolve(__dirname, `../src/${ item.dirRootName }`)
    })
    return result
 }

/**
 * @description
 * webpack html template
 */
const webpackHtmlTemplate = (HtmlWebpackPlugin) => {
  return routerList.map((item) => {
    return new HtmlWebpackPlugin({
        filename: `${ item.routerName }.html`,
        meta: {
            viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        },
        chunks: [ item.routerName ]
    })
  })
}

module.exports = {
  webpackEntry,
  webpackHtmlTemplate,
}



