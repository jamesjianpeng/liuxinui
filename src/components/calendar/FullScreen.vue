<template>
  <div class="">
    <h3 class="liuxinui_text-arrangement-center">{{ currentTime.getFullYear() }}</h3>
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
                  'liuxinui_genral-text': dateItem ? dateItem.today : '',
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
import minxin from './minxin.js'
import { getDatePickDateInstance, MONTH, DAY as dayList } from './index.js'

export default {
  name: 'DatePicker',
  mixins: [minxin]
}
</script>

<style lang="scss">
@import './calendal.scss';
</style>
