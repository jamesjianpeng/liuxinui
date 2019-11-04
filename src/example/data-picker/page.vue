<template>
  <div>
    <h3>Data-picker</h3>
    <div>
      <DatePicker
        @select="select"
      />
    </div>
  </div>
</template>

<script>
import { DatePicker, toast } from '@/index.js'

export default {
  name: 'App',
  data() {
    return {
      num: 0
    }
  },
  components: {
    DatePicker
  },
  mounted() {
  },
  methods: {
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

<style lang="scss" scoped>
.em {
  font-size: 50px;
  .em-one {
    font-size: .24em;
  }
}
</style>

