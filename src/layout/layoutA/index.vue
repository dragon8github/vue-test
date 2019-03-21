<template>
    <div class="layoutA">
       <!-- 头部 -->
       <dgheader></dgheader>
       <!-- 内容区 --> 
       <router-view></router-view>
       <!-- 尾部 -->
       <dgfooter></dgfooter>
    </div>
</template>

<script>
import dgheader from './header'
import dgfooter from './footer'

export default {
  name: 'layoutA',
  data () {
    return {

    }
  },
  methods: {
      go () {
          
      }
  },
  components: {
    dgheader,
    dgfooter,
  },
  computed: {

  },
  watch: {

  },
  beforeMount () {
  }
}
</script>

<style lang="scss" scoped>
@import "~@/scss/functions.scss";

</style>