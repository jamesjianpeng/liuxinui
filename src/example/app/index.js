import Vue from 'vue'
import App from './App.vue'

if (!document.querySelector('#app')) {
  let appEl = document.createElement('div')
  appEl.id = 'app'
  let scriptEl = document.getElementsByName('script')[0]
  console.log(scriptEl)
  document.body.insertBefore(appEl, scriptEl)
}

const app =  new Vue({
    el: '#app',
    render: (h) => h(App),
})

