<style lang="css">
.margin-top {
  margin-top: 10px;
}
p {
  margin: 0;
  padding: 0;
}

.file-upload-text {
  height: 32px;
  line-height: 32px;
}
.file-upload-container {
  padding: 10px;
}
.file-upload-inner {
  border: 1px solid #eee;
  border-radius: 4px;
}
.file-upload-inner_1 {
  padding: 10px;
}
.file-upload-header {
  border-bottom: 1px solid #eee;
  padding: 10px;
}
.boder {
  box-shadow: -1px 0 0 0 #eee;
}
.file-upload-icon {
  font-size: 36px;
}
</style>

<template>
  <div class="file-upload-container">
    <div class="file-upload-inner">
      <h3 class="file-upload-header">上传</h3>
      <div class="file-upload-inner_1">
        <a-row :gutter="4" type="flex" justify="center" align="middle">
          <a-col  type="flex" align="middle" :span="12" @click="clickUpload" @drap="drapUpload" >
            <a-icon class="file-upload-icon" type="cloud-upload" />
            <div>点击上传或拖拽上传文件</div>
          </a-col>
          <a-col :span="12" class="boder">
              <a-row :gutter="4" type="flex" justify="start" align="middle">
                <a-col :span="5" :push="1">
                <div> 发布环境</div>
                </a-col>
                <a-col :span="17">
                  <a-checkbox
                    v-for="(item, index) in envs"
                    :key="index"
                    @change="onCheckAllChange(item)"
                    :checked="selectEnvs.indexOf(item) > -1">
                    {{item}} </a-checkbox>
                  <a-checkbox
                    v-model="customizeComputed"
                    :checked="customize">
                    自定义</a-checkbox>
                </a-col>
              </a-row>
              <div class="margin-top"></div>
              <a-row :gutter="4" type="flex" justify="start" align="middle">
                <a-col :span="5" :push="1">
                  <span> 发布产品</span>
                </a-col>
                <a-col :span="12">
                  <div v-if="!customizeComputed">
                      <a-select defaultValue="lucy" style="width: 120px" @change="handleChange">
                        <a-select-option
                          v-for="(item, index) in codes"
                          :key="index"
                          :value="item.uid">{{ item.label }}</a-select-option>
                      </a-select>
                  </div>
                  <div v-else>
                      <a-input addonBefore="http://wesure.com/good/" v-model="customizePath"  :defaultValue="customizePath" />
                  </div>
                </a-col>
                <a-col :span="5">
                  <a-checkbox
                    v-model="compression"
                    :checked="compression">
                    压缩图片</a-checkbox>
                </a-col>
              </a-row>
          </a-col>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
const codes = [
  {
    uid: 1111,
    label: "one"
  },
  {
    uid: 11111,
    label: "two"
  },
  {
    uid: 11112,
    label: "three"
  }
];

class MakeInput {
  constructor(cb) {
    this._init()
    this.handleEvent = null
    this.el = null
    this.cb =cb
  }

  _init() {
      if (this.el) {
        return
      }
      const input = document.createElement('input')
      input.type = 'file'
      input.style.display = 'none'
      this.el = input
      this._addEvent()
      document.body.appendChild(input)
      input.click()
      console.dir(input)
  }

  _addEvent() {
    this.handleEvent = async (e)=> {
      await this.cb(e)
    }
    this.el.addEventListener('change', this.handleEvent)
  }
}
const envs = ["dev", "sit", "uat", "prod"];

export default {
  name: "file-upload",
  data() {
    return {
      envs: [],
      selectEnvs: [],
      codes: [],
      customize: false,
      compression: false,
      customizePath: '',
    };
  },
  computed: {
    customizeComputed: {
      get() {
        return this.customize;
      },
      set(val) {
        console.log(val);
        this.customize = val;
        if (this.customize) {
          this.selectEnvs = [];
        }
      }
    }
  },
  mounted() {
    this.codes = codes;
    this.envs = envs;
  },
  methods: {
    createInput () {
      const sleep = () => new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve('good')
        }, 5000)
      })
      new MakeInput(async (e) => {
        console.log(e)
        await sleep()
        console.log('ok')
      })
    },
    drapUpload (e) {
      console.log(e)
    },
    clickUpload (e) {
      this.createInput()
    },
    onCheckAllChange(item) {
      const index = this.selectEnvs.indexOf(item);
      if (index > -1) {
        this.selectEnvs.splice(index, 1);
      } else {
        this.selectEnvs.push(item);
      }
      if (this.customizeComputed) {
        this.customizeComputed = false;
      }
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    }
  }
};
</script>

