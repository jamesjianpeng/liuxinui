import Vue from 'vue'
import toast from './Toast.vue'

let $vm
const Toast = Vue.extend(toast)
const toastList = []
let toastHasSetTimeout = false
let toastTimeId = null
let isFirst = true

const ToastVm = {
  show (propsData) {
    const el = document.createElement('div');
    $vm = new Toast({
      el,
      propsData: {
        ...propsData,
        num: toastList.length
      }
    })
    document.body.appendChild($vm.$el)
    toastList.push($vm.$el)

    const moveEl = () => {
      Array.prototype.map.call(document.querySelectorAll('.james-toast_wrap'), (item, index) => {
        item.style.top = Number.parseInt(item.style.top) - 46 + 'px'
      })
    }

    const removeEl = () => {
      isFirst = false
      toastTimeId = setTimeout(() => {
        moveEl()
        const shiftEl = toastList.shift()
        let pa = null
        if (shiftEl) pa = shiftEl.parentNode
        if(pa) pa.removeChild(shiftEl)
        clearTimeout(toastTimeId)
        isFirst = true
        if (toastList.length) removeEl()
      }, propsData.time || 2000)
    }
    if (isFirst) removeEl()

  }
}

export default ToastVm
