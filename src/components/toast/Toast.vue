<template>
  <!-- <transition name="james-toast_wrap-animation"> -->
    <div
      v-show="show"
      class="james-toast_wrap"
      :class="{
        'james-toast_wrap-mobile': isMobile,
        'v2-james-toast_wrap_top-center_animation': show,
      }"
      :style="{
        top: 10 + 36 * num + 10 * num + 'px',
        'background-color': getBgColor,
        'border-radius': borderRadius === 'LargeRoundedCorner' ? '.5em' : '.08em'
      }">
      <span class="james-toast_wrap-text">{{ text }}</span>
    </div>
  <!-- </transition> -->
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
import { isMobile } from '../../help.js'

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
      isMobile
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
  // width: auto;
  // height: auto;
  height: .72em;
  line-height: .25em;
  transform: translateX(-50%);
  border-radius: .08em;
  box-shadow: 0 2px 10px 0 #eee;
  min-width: 200px;
  background: #fff;
  transition: .2s ease-in;
  padding: 0 .2em;
  color: #f0f0f0;
}
.james-toast_wrap-mobile {
  width: 90%;
}
.james-toast_wrap-text {
    font-size: .24em;
}

.james-toast_wrap-animation-enter-active, .james-toast_wrap-animation-leave-active {
  transition: opacity .2s;
  transform: translateX(-50%) scale(0);
}
.james-toast_wrap-animation-enter, .james-toast_wrap-animation-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-50%) scale(1);
}

.v2-james-toast_wrap_top-center_animation {
    // -webkit-animation: top-center_animation .2s linear;
    // -moz-animation: top-center_animation .2s linear;
    // -o-animation: top-center_animation .2s linear;
    //     animation: top-center_animation .2s linear;
      animation-duration: .2s;
      animation-name: top-center_animation;
      animation-fill-mode:forwards;
      -webkit-animation-fill-mode:forwards; /* Safari 和 Chrome */
}

@keyframes top-center_animation {
    0% {
      opacity: 0;
      transform: translateX(-50%) scale(0);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) scale(1);
    }
}
</style>


