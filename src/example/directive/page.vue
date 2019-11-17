<template>
  <div>
    clickoutside
    <div v-clickoutside="handleEvent">
      clickoutside
    </div>
    <div v-loading="loading">
      loading
    </div>
  </div>
</template>

<script>
import Toast from '@/components/toast'
import { setTimeout } from 'timers';

export default {
  name: 'App',
  data() {
    return {
      num: 0,
      loading: true
    }
  },
  components: {
    Toast
  },
  mounted() {
    const tiemid = setTimeout(() => {
      this.loading = !this.loading
    }, 5000)
  },
  methods: {
    handleEvent() {
      console.log('good')
    },
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

