<template>
  <div>
    <button @click="add">
      add Toast
    </button>
    <div class="em">
      <div class="em-one">
        em
      </div>
    </div>
  </div>
</template>

<script>
import Toast from './toast'

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

