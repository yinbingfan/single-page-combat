<template>
  <div class="kindeditor">
    <textarea class="form-control" ref="kindeditor" v-model="localValue" name="content" v-loaded-callback='initKindeditor'></textarea>
  </div>
</template>

<script>
// import '../../node_modules/kindeditor/'
import '../../node_modules/kindeditor/kindeditor-all.js'
import '../../node_modules/kindeditor/lang/zh-CN.js'
import '../../node_modules/kindeditor/themes/default/default.css'
import VueKindEditor from 'vue-kindeditor'


export default {
  name: 'kindeditor',
  props: ['options', 'value'],
  data () {
    return {
      localValue: ''
    }
  },
  watch: {
    localValue: 'updateValue',
    value: 'setDefault'
  },
  created () {
    this.setDefault()
  },
  methods: {
    initKindeditor () {
        var _this = this
        // 默认参数
        var options = {
            uploadJson: 'upload/image',
            width: '100%',
            afterChange () {
                _this.localValue = this.html()
            }
        }
        // 调用外部参数
        if (_this.options) {
            for(var i in _this.options){
                options[i] = _this.options[i]
            }
        }
        VueKindEditor.create(_this.$refs.kindeditor,options);
    },
    // 设置初始值
    setDefault () {
      this.localValue = this.value
    },
    // 修改父件的值
    updateValue () {
      this.$emit('input',this.localValue)
    }
  }
}
</script>