<template>
  <div class="">
    <h3 class="liuxinui_text-arrangement-center">
      <button>上一年</button>
      {{ currentTime.getFullYear() }}
      <button>下一年</button>
    </h3>
    <ul class="liuxinui-_date-picker-ul liuxinui-_date-picker-ul_single-month">
      <li
        v-for="(item, index) in list"
        :key="'list' + index"
        class="liuxinui-_date-li liuxinui-_date-li-month">
        <h3 class="liuxinui-_date-month">
          <button @click="changeMonth('previous')">上一月</button>
          {{ 1 + Number(index) }}月
          <button @click="changeMonth('next')">下一月</button>
        </h3>
        <div class="liuxinui-_day-li">
          <span
            class="liuxinui-_day-span liuxinui-_date-picker-ul_single-month_hearder"
            v-for="(dayItemHearder, dayIndexHearder) in dayList"
            :key="'_day' + dayIndexHearder"
            :data-_day="dayIndexHearder">
            {{dayItemHearder}}
          </span>
        </div>
        <div
            v-for="(dayItem, dayIndex) in item"
            :key="'day' + dayIndex"
            class="liuxinui-_date-div">
            <template
              v-for="(dateItem, dateIndex) in dayItem"
            >
              <span
                class="liuxinui-_date-span"
                :key="'date' + dateIndex"
                :class="{
                  'liuxinui_genral-text': dateItem ? dateItem.today : '',
                  'liuxinui-_date-span-hover': dateItem,
                }"
                @click="select(dateItem)"
                >
                {{ dateItem ? `${dateItem.date}` : '' }}
              </span>
            </template>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
import minxin from './minxin.js'
import { getDatePickDateInstance, MONTH, DAY as dayList } from './index.js'

export default {
  name: 'DatePicker',
  mixins: [minxin]
}
</script>


<style lang="scss">
@import './calendal.scss';
.liuxinui-_date-picker-ul_single-month {
  white-space: nowrap;
  width: 100vw;
  overflow: hidden;
  // border: 1px solid red;
  .liuxinui-_date-li-month {
    box-sizing: border-box;
    display: inline-block;
    width: 100vw;
    // border: 1px solid red;
    vertical-align: top;
    padding: 5px;
  }
  .liuxinui-_date-picker-ul_single-month_hearder {
    background: #eee;
    height: 36px;
    line-height: 36px;
  }
}
</style>
