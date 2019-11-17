<template>
  <div v-if="type === 'fullScreen'">
    <FullScreen
      :currentTime="currentTime"
      :type="type"
      @select="select"
    />
  </div>
  <div v-else>
    <SingleMonth
      :currentTime="currentTime"
      :type="type"
      @select="select"
    />
  </div>
</template>

<script>
import FullScreen from './FullScreen.vue'
import SingleMonth from './SingleMonth.vue'

export default {
  name: 'DatePicker',
  props: {
    currentTime: {
      type: [Date, Number, String],
      default() {
        return new Date()
      }
    },
    type: {
      type: [String],
      default() {
        return 'fullScreen'
      }
    }
  },
  components: {
    FullScreen,
    SingleMonth
  },
  methods: {
    select(item) {
      this.$emit('select', item)
    }
  }
}
</script>


<style lang="scss">
@import '../../ui/base.scss';
.liuxinui-_date-picker-ul {
  padding: 0;
  margin: 0;
}
.liuxinui-_day-li {
  list-style: none;
  .liuxinui-_day-span {
    display: inline-block;
    min-width: calc(100% / 7);
    text-align: center;
  }
}
.liuxinui-_date-li {
  list-style: none;
  position: relative;
  .liuxinui-_date-div {
    border-bottom: 2px solid #eee;
  }
  .liuxinui-_date-span {
    display: inline-block;
    min-width: calc(100% / 7);
    text-align: center;
    height: 36px;
    line-height: 36px;
  }
  .liuxinui-_date-span-hover:hover {
    cursor: pointer;
    box-shadow: 0 0 0 2px#5654a2 inset;
  }
  .liuxinui-_date-span_crrent {

  }
}
.liuxinui-_date-month {
  // position: absolute;
  // top: 0;
  // left: 10px;
  text-align: center;
}
</style>
