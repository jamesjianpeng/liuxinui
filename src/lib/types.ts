export type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'options' | 'OPTIONS' | 'put' | 'PUT' | 'POST' | 'post'

export interface AjaxRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
