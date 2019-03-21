<template>
  <!-- 数据统计 -->
  <div class='statistical'>
      <div class='u-container u-flex-ac'>
          <div class='statistical__item'>
              <div class="statistical__item--top u-flex-sc">
                  <i class="statistical__item--icon icon-data"></i>
                  <article class='statistical__item--title'>
                      <h4 class='statistical__item--cn'>今日数据总量</h4>
                      <article class='statistical__item--en'>Total amount of data</article>
                  </article>
              </div>
              <div class="statistical__item--bottom"> <count-to :startVal='0' :endVal='165148466' :duration=2500></count-to> </div>
          </div>
          <div class='statistical__item'>
              <div class="statistical__item--top u-flex-sc">
                  <i class="statistical__item--icon icon-setting"></i>
                  <article class='statistical__item--title'>
                      <h4 class='statistical__item--cn'>系统数量</h4>
                      <article class='statistical__item--en'>Number of systems</article>
                  </article>
              </div>
              <div class="statistical__item--bottom"> <count-to :startVal='0' :endVal='23' :duration=2500></count-to> </div>
          </div>
          <div class='statistical__item'>
              <div class="statistical__item--top u-flex-sc">
                  <i class="statistical__item--icon icon-add"></i>
                  <article class='statistical__item--title'>
                      <h4 class='statistical__item--cn'>新增表数量</h4>
                      <article class='statistical__item--en'>New data</article>
                  </article>
              </div>
              <div class="statistical__item--bottom"> <count-to :startVal='0' :endVal='748466' :duration=2500></count-to> </div>
          </div>
      </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to'

export default {
  name: 'statistical',
  data () {
    return {

    }
  },
  methods: {
      go () {
          
      }
  },
  components: {
    countTo
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
.statistical {
    height: 220px;
    background: url('~@/assets/bg.png') center / 100% 100% no-repeat;
}

.statistical__item--icon {
    width: 35px;
    height: 35px;
    display: inline-block;
}

.icon-data {
    background: url('~@/assets/data.png') center / 100% 100% no-repeat;
}

.icon-setting {
    background: url('~@/assets/setting.png') center / 100% 100% no-repeat;
}

.icon-add {
    background: url('~@/assets/add.png') center / 100% 100% no-repeat;
}

.statistical__item {
    text-align: left;
    margin-top: 55px;
}

.statistical__item--title {
    margin-left: 16px;
}

.statistical__item--cn {
    margin: 0;
}

.statistical__item--en {
    color: #f5e4e4;
    font-size: 14px;
}

.statistical__item--bottom {
    font-size: 46px;
    margin-top: 20px;
}
</style>