import Vue from 'vue'
import App from './components/toast.vue'

if (!document.querySelector('#app')) {
  let appEl = document.createElement('div')
  appEl.id = 'app'
  let scriptEl = document.getElementsByName('script')[0]
  console.log(scriptEl)
  document.body.insertBefore(appEl, scriptEl)
}

console.log('toast 1.1')

const app =  new Vue({
    el: '#app',
    render: (h) => h(App),
})

