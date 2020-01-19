/**
 * @file router 文件
 * 包括 webpack entry，html, webpack-dev-router 的部分
 */
const path = require('path')

const routerList = [
    {
      chunkAndRouteName: 'index',
      dirRootName: 'example/app/index.js'
    },
    {
      chunkAndRouteName: 'file-upload',
      dirRootName: 'example/file-upload/index.js'
    },
    {
      chunkAndRouteName: 'toast',
      dirRootName: 'example/toast/index.js'
    },
    {
      chunkAndRouteName: 'date-picker',
      dirRootName: 'example/date-picker/index.js'
    },
    {
      chunkAndRouteName: 'directive',
      dirRootName: 'example/directive/index.js'
    },
    {
      chunkAndRouteName: 'typescript-play',
      dirRootName: 'example/typescript-play/index.ts'
    },
    {
      chunkAndRouteName: 'javascript-play',
      dirRootName: 'example/javascript-play/index.js'
    }
]

/**
 * @description
 * webpack entry
 */
 const webpackEntry = () => {
    const result = {}
    routerList.map((item) => {
      result[ item.chunkAndRouteName ] = path.resolve(__dirname, `../src/${ item.dirRootName }`)
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
        filename: `${ item.chunkAndRouteName }.html`,
        title: 'liuxinui-play',
        meta: {
            viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        },
        chunks: [ item.chunkAndRouteName ]
    })
  })
}

module.exports = {
  webpackEntry,
  webpackHtmlTemplate,
}



