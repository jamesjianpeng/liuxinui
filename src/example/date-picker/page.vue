<template>
  <div>
    <h3>Data-picker</h3>
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

export default {
  name: 'App',
  data() {
    return {
      num: 0,
      type: 1,
      secondeType: 'fullScreen'
    }
  },
  components: {
    Calendar
  },
  mounted() {
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

