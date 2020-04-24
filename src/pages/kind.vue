<template>
    <div>
          <Kind-editor  ref="kindeditor" :html="html" @input="getContent"></Kind-editor>
    </div>
</template>

<script>
import KindEditor from "../components/kind/index";
export default {
  name: 'GoodsForm',
  components: {
    KindEditor
  },
  data() {
    return {
      html: '',
      content:'aaaaa'
    }
  },
  methods: {
      // 获取编辑器内容
    getContent(content) {
      this.content = content
    },
    // 编辑器内容转换成在线url
    async getcontent2Url() {
      try {
        const htmlUrl =  await this.$refs.kindeditor.content2Url()
        return htmlUrl
      } catch (error) {
        console.log(error)
      }
    }

  }
}
</script>