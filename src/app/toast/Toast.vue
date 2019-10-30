<template>
  <transition name="james-toast_wrap-animation">
    <div
      v-show="show"
      class="james-toast_wrap"
      :style="{
        top: 10 + 36 * num + 10 * num + 'px'
      }">
      <span class="james-toast_wrap-text">{{ text }}</span>
    </div>
  </transition>
</template>

<script>

export default {
  name: 'Toast',
  props: {
    text: {
      type: String,
      required: true,
      default() {
        return ''
      }
    },
    num: {
      type: Number,
      required: true,
      default() {
        return  0
      }
    }
  },
  data () {
    return {
      show: false
    }
  },
  mounted() {
    const one = setTimeout(() => {
      this.show = true
      clearTimeout(one)
    }, 100)
  }
}
</script>

<style lang="scss">
.james-toast_wrap {
  font-size: 50px;
  position: fixed;
  top: 10px;
  left: 50%;
  height: .72em;
  line-height: .2em;
  transform: translateX(-50%);
  border-radius: 4px;
  box-shadow: 0 2px 10px 0 #eee;
  min-width: 200px;
  background: #fff;
  transition: .2s ease-in;
  padding: 0 .2em;
}
.james-toast_wrap-text {
    font-size: .24em;
}
.james-toast_wrap-animation-enter-active, .james-toast_wrap-animation-leave-active {
  transition: opacity .2s;
}
.james-toast_wrap-animation-enter, .james-toast_wrap-animation-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


