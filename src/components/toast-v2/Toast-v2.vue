<template>
    <div
      class="v2-james-toast_wrap"
      :class="{
        'v2-james-toast_wrap-mobile': isMobile,
        'v2-james-toast_wrap_top-center': position === 'topCenter',
        'v2-james-toast_wrap_top-center_animation': position === 'topCenter' && show,
        'v2-james-toast_wrap_top-right': position === 'topRight',
        'v2-james-toast_wrap_top-right_animation': position === 'topRight' && show
      }"
      :style="{
        top: 10 + 36 * this.num + 10 * this.num + 'px',
        'background-color': getBgColor,
        'border-radius': borderRadius === 'LargeRoundedCorner' ? '.5em' : '.08em'
      }">
      <span class="v2-james-toast_wrap-text">{{ text }}</span>
    </div>
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
  name: 'ToastV2',
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
    position: {
      type: String,
      required: false,
      default() {
        return 'topCenter'
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
    },
    getTop() {
      if (!this.position || this.position === 'topCenter') {
        return 10 + 36 * this.num + 10 * this.num + 'px'
      }
      if (this.position === 'topRight') {
        return 10 + 'px'
      }
    }
  },
  mounted() {
    if (this.position === 'topCenter') {
      const show = setTimeout(() => {
        this.show = true
        clearTimeout(show)
      }, 100)
    }
    // const hidden = setTimeout(() => {
    //   this.show = false
    //   clearTimeout(hidden)
    // }, this.time * .7)
  }
}
</script>

<style lang="scss">
/* 通用的样式 */
.v2-james-toast_wrap {
  font-size: 50px;
  position: fixed;
  height: .72em;
  line-height: .25em;
  background: #fff;
  transition: .2s ease-in;
  padding: 0 .2em;
  color: #f0f0f0;
  border-radius: .08em;
  box-shadow: 0 2px 10px 0 #eee;
  min-width: 200px;
}
/* 顶部居中交互 */
.v2-james-toast_wrap_top-center {
  top: 10px;
  left: 50%;
  opacity: 0;
  transform: translateX(-50%);
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
/* 右上角交互 */
.v2-james-toast_wrap_top-right {
  top: 10px;
  right: 0;
  transform: translateX(100%);
  opacity: 0;
}
.v2-james-toast_wrap_top-right_animation {
    // -webkit-animation: top-center_animation .2s linear;
    // -moz-animation: top-center_animation .2s linear;
    // -o-animation: top-center_animation .2s linear;
    //     animation: top-center_animation .2s linear;
      animation-duration: .2s;
      animation-name: top-right_animation;
      animation-fill-mode:forwards;
      -webkit-animation-fill-mode:forwards; /* Safari 和 Chrome */
}

@keyframes top-right_animation {
    0% {
      opacity: 0;
      transform: translateX(100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
}

/* 移动端基础样式 */
.v2-james-toast_wrap-mobile {
  width: 90%;
}

.v2-james-toast_wrap-text {
    font-size: .24em;
}

.v2-james-toast_wrap-animation-enter-active, .v2-james-toast_wrap-animation-leave-active {
  transition: opacity .2s;
}
.v2-james-toast_wrap-animation-enter, .v2-james-toast_wrap-animation-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>


