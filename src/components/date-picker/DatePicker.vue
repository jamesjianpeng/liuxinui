<template>
  <div class="">
    <h3>{{ currentTime.getFullYear() }}</h3>
    <ul class="liuxinui-_date-picker-ul">
      <li
        v-for="(item, index) in list"
        :key="'list' + index"
        class="liuxinui-_date-li">
        <h3 class="liuxinui-_date-month">{{ 1 + Number(index) }}月</h3>
        <div class="liuxinui-_day-li">
          <span
            class="liuxinui-_day-span"
            v-for="(dayItemHeard, dayIndexHeard) in dayList"
            :key="'_day' + dayIndexHeard"
            :data-_day="dayIndexHeard">
            {{dayItemHeard}}
          </span>
        </div>
        <div
            v-for="(dayItem, dayIndex) in item"
            :key="'day' + dayIndex"
            class="liuxinui-_date-div">
            <span
              v-for="(dateItem, dateIndex) in dayItem"
              :key="'date' + dateIndex"
            >
            <span
              class="liuxinui-_date-span"
              :class="{
                'genral-text': dateItem ? dateItem.today : '',
                'liuxinui-_date-span-hover': dateItem
              }"
              @click="select(dateItem)"
              >
              {{ dateItem ? `${dateItem.date}` : '' }}
            </span>
            </span>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
import { getDatePickDateInstance, MONTH, DAY as dayList } from './index.js'
import baseConfig from '../../ui/base.js'
export default {
  name: 'DatePicker',
  props: {
    currentTime: {
      type: [Date, Number, String],
      default() {
        return new Date()
      }
    }
  },
  data() {
    return {
      dateList: [],
      showList: {}, // 是一个二维数组
      dayList,
      baseConfig,
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
