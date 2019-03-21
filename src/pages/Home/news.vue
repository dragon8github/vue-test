<template>
  <div class='news'>
      <h1 class='news__title'>数据中心</h1>
      <div class='news__cards u-flex-bc'>
          <div class='news__card'>
              <article class='news__card--title'>
                  <h4 class='news__card--cn'>最新数据</h4> <span class='news__card--en'>New data</span>
              </article>
              <ul class='news__card--items'>
                  <li class='news__card--item'><a class='hover-shadow-box-animation' href="###">1、东莞市机动车交通违法监控抓拍位置信息</a><span class='news__card--download'><i class='news__card--icon'></i>1289</span></li>
                  <li class='news__card--item'><a class='hover-shadow-box-animation' href="###">1、东莞市机动车交通违法监控抓拍位置信息</a><span class='news__card--download'><i class='news__card--icon'></i>1289</span></li>
                  <li class='news__card--item'><a class='hover-shadow-box-animation' href="###">1、东莞市机动车交通违法监控抓拍位置信息</a><span class='news__card--download'><i class='news__card--icon'></i>1289</span></li>
                  <li class='news__card--item'><a class='hover-shadow-box-animation' href="###">1、东莞市机动车交通违法监控抓拍位置信息</a><span class='news__card--download'><i class='news__card--icon'></i>1289</span></li>
                  <li class='news__card--item'><a class='hover-shadow-box-animation' href="###">1、东莞市机动车交通违法监控抓拍位置信息</a><span class='news__card--download'><i class='news__card--icon'></i>1289</span></li>
              </ul>
              <button class='news__card--more'>查看更多</button>
          </div>
          <div class='news__card'>
              <article class='news__card--title'>
                  <h4 class='news__card--cn'>异常数据</h4> <span class='news__card--en'>Abnormal data</span>
              </article>
              <ul class='news__card--items'>
                  <li class='news__card--item'><a class='hover-shadow-box-animation' href="###">1、东莞市机动车交通违法监控抓拍位置信息</a><span class='news__card--download'><i class='news__card--icon'></i>1289</span></li>
                  <li class='news__card--item'><a class='hover-shadow-box-animation' href="###">1、东莞市机动车交通违法监控抓拍位置信息</a><span class='news__card--download'><i class='news__card--icon'></i>1289</span></li>
                  <li class='news__card--item'><a class='hover-shadow-box-animation' href="###">1、东莞市机动车交通违法监控抓拍位置信息</a><span class='news__card--download'><i class='news__card--icon'></i>1289</span></li>
                  <li class='news__card--item'><a class='hover-shadow-box-animation' href="###">1、东莞市机动车交通违法监控抓拍位置信息</a><span class='news__card--download'><i class='news__card--icon'></i>1289</span></li>
                  <li class='news__card--item'><a class='hover-shadow-box-animation' href="###">1、东莞市机动车交通违法监控抓拍位置信息</a><span class='news__card--download'><i class='news__card--icon'></i>1289</span></li>
              </ul>
              <button class='news__card--more'>查看更多</button>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'news',
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

.news {
    margin-top: 100px;
    margin-bottom: 136px;
}

.news__title {
    color: #2068d5;
    font-size: 30px;
    text-align: center;
    margin-bottom: 85px;
}

.news__card {
    width: 567px;
    padding: 37px 19px 17px 68px;

    background-color: #ffffff;
    box-shadow: 0px 0px 32px 0px rgba(187, 187, 187, 0.28);
    border-radius: 6px;
}

.news__card--cn {
    color: #202020;
    font-size: 24px;
    display: inline-block;
    margin: 0;
}

.news__card--en {
    color: #ee8305;
    font-size: 18px;
    margin-left: 5px;
    font-weight: bold;
}

.news__card--items {
    margin-top: 30px;
    margin-bottom: 20px;
    width: 418px;
}

.news__card--item {
    color: #4b4b4b;
    font-size: 14px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.news__card--item a {
    height: 22px;
}

.news__card--item + .news__card--item {
    margin-top: 30px;
}

.news__card--more {
    float: right;
    text-align: center;
    border: 0;
    width: 120px;
    height: 36px;
    background-color: #3fc7f6;
    border-radius: 18px;
    color: #ffffff;
    outline: none;
    cursor: pointer;
}

.news__card--more:hover {
    opacity: 0.8;
}

.news__card--download {
    color: #7f7f7f;
}

.news__card--icon {
    width: 12px;
    height: 13px;
    background: url('~@/assets/xiazai.png') center / 100% 100% no-repeat;
    display: inline-block;
    margin-right: 16px;
}
</style>