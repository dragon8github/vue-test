<template>
    <div class="layoutB">
        <!-- 头部 -->
        <amheader></amheader>
        <!-- 路由 -->
        <router-view></router-view>
    </div>
</template>

<script>
import amheader from './header'
export default {
  name: 'layoutB',
  data () {
    return {
        
    }
  },
  methods: {
      go () {
          
      }
  },
  components: {
    amheader
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
.layoutB {

}
</style>