<template>
  <div class="banner">
    <div class='u-container-full'>
      <div class="banner">
        <div class='banner1 u-container u-flex-bc'>
          <div class='banner1__earth'>
            <img class='banner1__earth--img' src="@/assets/earth.png" alt="业务主题库管理平台" />
          </div>
          <div class='banner1__data'>

            <!-- 数据总量 -->
            <div class='bcount'>
              <div class='bcount__title'>数据总量</div>
              <div class='bcount__count'>
                <count-to :startVal='0' :endVal='2364678' :duration=2500 class='bcount__count--num'></count-to>
                <div class='bcount__history'>历史标准 <count-to :startVal='0' :endVal='2936750' :duration=2500 class='bcount__history--count'></count-to></div>
              </div>
            </div>

            <!-- 数据空间 -->
            <div class='dataSpace u-flex-ss'>
              <i class='banner1-icon icon-dataSpace'></i>
              <div class='dataSpace__right'>
                <article class='dataSpace__title--cn'>数据空间</article>
                <article class='dataSpace__title--en'>Spatial flow</article>
                <div class='dataSpace__count'><count-to :startVal='2936750' :endVal='2364678' :duration=2500 ></count-to></div>
              </div>
            </div>

            <!-- 空间占比 -->
            <div class="spaceRatio u-flex-ss">
              <i class='banner1-icon icon-spaceRatio'></i>
              <div class='spaceRatio__right'>
                <article class='dataSpace__title--cn'>空间占比</article>
                <article class='dataSpace__title--en'>Space ratio</article>
                <div class='spaceRatio__proportion'></div>
              </div>
            </div>

            <!-- 增长IOP5 -->
            <div class='increase u-flex-ss'>
              <i class='banner1-icon icon-increase'></i>
              <div class='increase__right'>
                <article class='dataSpace__title--cn'>增长IOP5</article>
                <article class='dataSpace__title--en'>Growth IOP5</article>
                <div class='spaceRatio__items'>
                  <p class='spaceRatio__items--title'>第一数据</p>
                  <div class='spaceRatio__item'><myprogress class='is-color-17a9e6 myprogress' _width='50%'></myprogress></div>
                  <p class='spaceRatio__items--title'>第一数据</p>
                  <div class='spaceRatio__item'><myprogress class='is-color-ffffff myprogress' _width='50%'></myprogress></div>
                  <p class='spaceRatio__items--title'>第一数据</p>
                  <div class='spaceRatio__item'><myprogress class='is-color-ffffff myprogress' _width='50%'></myprogress></div>
                  <p class='spaceRatio__items--title'>第一数据</p>
                  <div class='spaceRatio__item'><myprogress class='is-color-D3F7B6 myprogress' _width='50%'></myprogress></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import countTo from 'vue-count-to'
import myprogress from '@/components/myprogress'

export default {
  name: 'banner',
  data() {
    return {

    }
  },
  methods: {
    go() {
      
    }
  },
  components: {
    countTo,
    myprogress
  },
  computed: {

  },
  watch: {

  },
  beforeMount() {
    
  }
}

</script>
<style lang="scss" scoped>
@import '~@/scss/functions.scss';
.banner {
  height: 780px;
  background: url('~@/assets/banner1bg.png') center / 100% 100% no-repeat;
}

.banner1 {
  height: 100%;
  margin: auto;
  padding-right: 40px;
}

.banner1__data {
  height: 627px;
  margin-top: 24px;
  margin-left: 27px;
}

.bcount__count {
  font-size: 60px;
  color: #168ecd;
  margin: 0;
}

.bcount__count--num {
  display: inline-block;
}

.bcount__history {
  text-align: right;
  color: #ffffff;
  font-size: 14px;
}

.bcount__history--count {
  color: #b6eb99;
  font-size: 24px;
}

.dataSpace__count {
  color: #168ecd;
  margin-top: 16px;
  font-size: 34px;
}

.bcount__title {
  color: #ffffff;
  font-size: 18px;
}

.banner1__earth--img {
  width: 655px;
  height: 660px;
  animation: Pulse 3s infinite ease;
}

.banner1-icon {
  margin-right: 20px;
  padding-top: 30px;
}

.icon-dataSpace {
  @include bg(24px, 24px, '~@/assets/dataSpace.png');
}

.icon-spaceRatio {
  @include bg(24px, 24px, '~@/assets/spaceRatio.png');
}

.icon-increase {
  @include bg(24px, 24px, '~@/assets/increase.png');
}

.dataSpace__title--cn {
  font-size: 16px;
}

.dataSpace__title--en {
  font-size: 14px;
  color: #aaaaaa;
}

.dataSpace,
.spaceRatio,
.increase {
  margin-top: 25px;
}


.spaceRatio__item {
  width: 220px;
  height: 2px;
  border-radius: 1px;
  margin-top: 4px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
    background-color: #ffffff;
    opacity: .1;
  }
}

.is-color-17a9e6 {
  background: #17a9e6;
}

.is-color-ffffff {
  background: #ffffff;
}

.is-color-D3F7B6 {
  background: #D3F7B6;
}

.spaceRatio__items--title {
  font-size: 12px;
}

.myprogress {
  height: 2px;
  border-radius: 1px;
}
</style>
