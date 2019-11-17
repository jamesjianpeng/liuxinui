import Vue from 'vue'
import App from './page.vue'
import clickoutside from '../../directive/clickoutside';
import loading from '../../directive/loading';

Vue.directive(clickoutside.name, clickoutside.handleEvent)
Vue.directive(loading.name, loading.handleEvent)

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

