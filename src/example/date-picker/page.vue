<template>
  <div>
    <h3>Data-picker</h3>
    <input style="display: block;width: 100vw;" v-model="navigator" />
    {{ isWeiXin }}
    <ul>
      <li>
        <button @click="changeTab(1, 'fullScreen')">日历组件 12月都展示</button>
        <button @click="changeTab(1, 'singleMonth')">日历组件 只展示一个月</button>
      </li>
      <li>
        <button @click="changeTab(2)">时间选择组件</button>
      </li>
    </ul>
    <div v-if="type == 1">
      <Calendar
        :type="secondeType"
        @select="select"
      />
    </div>
    <div v-else>

    </div>
  </div>
</template>

<script>
import { Calendar, toast } from '@/index.js'
function isWeiXin() {
    var ua = window.navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return '1';
    } else {
        return '0';
    }
}
export default {
  name: 'App',
  data() {
    return {
      num: 0,
      type: 1,
      secondeType: 'fullScreen',
      navigator: window.navigator.userAgent.toLowerCase(),
      isWeiXin: ''
    }
  },
  components: {
    Calendar
  },
  mounted() {
    const state = isWeiXin()
    console.log(state)
    this.isWeiXin = state
  },
  methods: {
      changeTab(type, secondeType) {
        this.type = type
        if (type === 1) {
          this.secondeType = secondeType
        }
      },
      select(item) {
        console.log(item)
        if (!item) return
        toast.show({
          borderRadius: '',
          state: 'warning',
          time: 2500,
          text: '今天是' + item._date + ' ' + item.day + ' , 小宝贝每天都爱你！'
        })
      }
  }
}
</script>

<style lang="scss">
@import '../style.scss';
.em {
  font-size: 50px;
  .em-one {
    font-size: .24em;
  }
}
</style>

