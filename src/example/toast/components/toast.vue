<template>
  <div>
    version 1.3
    <h3>小圆角</h3>
    <ul>
      <li>
        <button @click="add('genral', '小可爱，我爱你🤟，小可爱😍😍，你是日常表白')">
          add genral Toast
        </button>
      </li>
      <li>
        <button @click="add('success', '小可爱，今天你又有进步嗯，啵啵😍😍')">
          add success Toast
        </button>
      </li>
      <li>
        <button @click="add('fail', '小可爱，iphone 11 紫色不喜欢啊，呜呜，要换白色啊？？')">
          add fail Toast
        </button>
      </li>
      <li>
        <button @click="add('warning', '小可爱，别闹啊，我要好好学习，昂～')">
          add warning Toast
        </button>
      </li>
    </ul>
    <h3>大圆角</h3>
    <ul>
      <li>
        <button @click="add('genral', '小可爱，大圆角告诉你，我爱你😍', 'LargeRoundedCorner')">
          add genral Toast
        </button>
      </li>
      <li>
        <button @click="add('success', '小可爱，每天你都很棒啵啵😍爱你', 'LargeRoundedCorner')">
          add success Toast
        </button>
      </li>
      <li>
        <button @click="add('fail', '小可爱，天气太冷了，几点穿长袖😍😍，🤟', 'LargeRoundedCorner')">
          add fail Toast
        </button>
      </li>
      <li>
        <button @click="add('warning', '小可爱，乖乖的哟，好好学习😍', 'LargeRoundedCorner')">
          add warning Toast
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { toast } from '@/index.js'

export default {
  name: 'App',
  data() {
    return {
      num: 0
    }
  },
  mounted() {
  },
  methods: {
    add(state, text, borderRadius) {
      toast.show({
        borderRadius,
        state,
        time: 2500,
        text
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

