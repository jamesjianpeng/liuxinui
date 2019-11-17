document
export default {
  name: 'loading',
  handleEvent: {
    bind: function(el, binding, vode) {
      if (binding.value) {
        const id = 'loading'+ new Date().getTime()
        el.__loaidngid__ = id
        const div = document.createElement('div')
        div.id = id
        div.innerHTML = '.....loading.....'
        el.appendChild(div);
      }
    },
    update(el, binding, vode) {
      const loadingEl = document.querySelector('#'+ el.__loaidngid__)
      if (binding.value) {
        loadingEl.style.display = 'block'
      } else {
        loadingEl.style.display = 'none'
      }
    },
    unbind: function(el, binding) {
      el.removeChild(document.querySelector('#'+ el.__loaidngid__))
      delete el.__loaidngid__
    }
  }
}
