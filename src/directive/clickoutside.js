export default {
  name: 'clickoutside',
  handleEvent: {
    bind: function(el, binding, vode) {
      function documentHandler (e) {
        if (el.contains(e.target)) {
          return false
        }
        if (binding.expression) {
          binding.value(e)
        }
      }
      el.__vueClickOutSide__ = documentHandler
      document.addEventListener('click', documentHandler)
    },
    unbind: function(el, binding) {
      document.removeEventListener('click', el.__vueClickOutSide__)
      delete el.__vueClickOutSide__
    }
  }
}
