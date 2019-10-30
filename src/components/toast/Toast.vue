<template>
  <transition name="james-toast_wrap-animation">
    <div
      v-show="show"
      class="james-toast_wrap"
      :style="{
        top: 10 + 36 * num + 10 * num + 'px',
        'background-color': getBgColor,
        'border-radius': borderRadius === 'LargeRoundedCorner' ? '.5em' : '.08em'
      }">
      <span class="james-toast_wrap-text">{{ text }}</span>
    </div>
  </transition>
</template>

<script>
import {
  genral,
  success,
  fail,
  warning,
  GENRAL,
  SUCCESS,
  FAIL,
  WARNING
} from '../../ui/base.js'

import baseConfig from '../../ui/base.js'

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
    state: {
      type: String,
      required: false,
      default() {
        return ''
      }
    },
    borderRadius: {
      type: String,
      required: false,
      default() {
        return 'auto' //  LargeRoundedCorner
      }
    },
    time: {
      type: Number,
      required: false,
      default() {
        return 1800
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
      show: false,
      baseConfig,
    }
  },
  computed: {
    getBgColor() {
      return this.state === GENRAL ? baseConfig.color[GENRAL] :
      this.state === SUCCESS ? baseConfig.color[SUCCESS] :
      this.state === FAIL ? baseConfig.color[FAIL] :
      baseConfig.color[WARNING];
    }
  },
  mounted() {
    const show = setTimeout(() => {
      this.show = true
      clearTimeout(show)
    }, 100)
    // const hidden = setTimeout(() => {
    //   this.show = false
    //   clearTimeout(hidden)
    // }, this.time * .7)
  }
}
</script>

<style lang="scss">
.james-toast_wrap {
  font-size: 50px;
  position: fixed;
  top: 10px;
  left: 50%;
  min-height: .72em;
  line-height: .2em;
  transform: translateX(-50%);
  border-radius: .08em;
  box-shadow: 0 2px 10px 0 #eee;
  min-width: 200px;
  background: #fff;
  transition: .2s ease-in;
  padding: 0 .2em;
  color: #f0f0f0;
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


