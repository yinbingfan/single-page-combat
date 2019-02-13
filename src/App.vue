<template>
  <div id="app">
    <layout/>
    <content-lists/>
  </div>
</template>

<script>
import layout from './components/layout.vue'
import contentLists from './components/content-lists.vue'
export default {
  name: 'app',
  components: {
    layout,
    contentLists
  }
}
</script>

<style>

</style>
