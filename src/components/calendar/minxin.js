import { getDatePickDateInstance, MONTH, DAY as dayList } from './index.js'

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
  data() {
    return {
      dayList,
      list: {
      }
    }
  },
  created() {
    this.list = getDatePickDateInstance(this.currentTime)
    console.log(this.list)
  },
  methods: {
    select(item) {
      this.$emit('select', item)
    },
    changeMonth(type) {
      if (type === 'previous') {

      } else {

      }
    }
  }
}
