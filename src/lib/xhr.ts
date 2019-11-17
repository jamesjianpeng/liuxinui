import  { AjaxRequestConfig } from './types'

function xhr (config: AjaxRequestConfig): void {
  const { url, method = 'get', data = null, params } = config

  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(), url, true)

  request.send(data)
}

export default xhr
