<template>
  <div>
    <a href="./toast.html"> toast 组件</a>
    <a href="./date-picker.html"> date-picker 组件</a>
  </div>
</template>

<script>
import Toast from '@/components/toast'

export default {
  name: 'App',
  data() {
    return {
      num: 0
    }
  },
  components: {
    Toast
  },
  mounted() {
  },
  methods: {
    add() {
      Toast.show({
        time: 1500,
        text: this.num++ + 'one'
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

