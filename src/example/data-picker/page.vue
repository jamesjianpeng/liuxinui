<template>
  <div>
    <h3>Data-picker</h3>
    <div>
      <DatePicker />
    </div>
  </div>
</template>

<script>
import { DatePicker } from '@/index.js'

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

