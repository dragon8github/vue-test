<template>
  <div class='process'>
      <h1 class='process__title'>傻瓜式接入，自动汇集数据，统筹数据资产</h1>
      <ul class='process__items u-flex-ac'>
          <li class='process__item'><i class='process__item--icon icon-jobConfiguration'></i>
              <p class='process__item--title'>作业配置</p>
          </li>
          <li class='process__item'><i class='process__item--icon icon-dataFiltering'></i>
              <p class='process__item--title'>数据过滤</p>
          </li>
          <li class='process__item'><i class='process__item--icon icon-jobScheduling'></i>
              <p class='process__item--title'>作业调度</p>
          </li>
          <li class='process__item'><i class='process__item--icon icon-displayData'></i>
              <p class='process__item--title'>展示数据</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'process',
  data () {
    return {

    }
  },
  methods: {
      go () {
          
      }
  },
  components: {

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
.process {
    color: #1d1d1d;
    text-align: center;
}

.process__title {
    margin-top: 136px;
    margin-bottom: 90px;
    font-size: 30px;
}

.process__items {}

.process__item {
    width: 125px;
    position: relative;
}

.process__item:not(:last-child)::after {
    width: 96px;
    height: 32px;

    position: absolute;
    left: 90px;
    top: 50px;

    margin-left: 63px;
    margin-right: 74px;

    content: '';
    background: url('~@/assets/towardsTheRight.png') center / 100% 100% no-repeat;
    display: inline-block;
}

.process__item--title {
    font-size: 26px;
    margin-top: 30px;
}

.process__item--icon {
    height: 126px;
    width: 126px;
    display: inline-block;
}

.icon-jobConfiguration {
    background: url('~@/assets/jobConfiguration.svg') center / 96px 122px no-repeat;
}

.icon-dataFiltering {
    background: url('~@/assets/dataFiltering.svg') center / 124px 126px no-repeat;
}

.icon-jobScheduling {
    background: url('~@/assets/jobScheduling.svg') center / 119px 105px no-repeat;
}

.icon-displayData {
    background: url('~@/assets/displayData.svg') center / 119px 105px no-repeat;
}
</style>