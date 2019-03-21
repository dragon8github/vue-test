<template>
  <div class="home">
    <!-- banner区 -->
    <banner></banner>
    <!-- 统计区 -->
    <statistical></statistical>
    <!-- 内容区 -->
    <main class='main u-container'>
        <!-- 数据中心（写死的） -->
        <process></process>
        <!-- 数据中心（新闻News中心） -->
        <news></news>
    </main>
  </div>
</template>

<script>
import banner from './banner'
import statistical from './statistical'
import process from './process'
import news from './news'

export default {
  name: 'home',
  data () {
    return {

    }
  },
  methods: {
      go () {
          
      }
  },
  components: {
    banner,
    statistical,
    process,
    news,
  },
  computed: {

  },
  watch: {

  },
  beforeMount () {
  }
}
</script>

<style lang="scss">
body {
  background: #F9FAFE;
}
</style>