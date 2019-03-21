<template>
  <!-- 头部 -->
  <header class='header'>
      <div class="u-container">
          <div class='header__top u-flex-bc'>
              <div class='login u-flex-bc'>
                  <article class='login__article'>欢迎来到东莞市教育数据中心！</article>
                  <div class='login__entry'>
                      <a href="###">登录</a>
                      <span class='login__entry--line'>|</span>
                      <a href="###">注册</a>
                  </div>
              </div>
              <div class='search'>
                  <input class='search__input' type="text" placeholder="输入文字搜索" />
                  <i class='icon-search'></i>
              </div>
          </div>

          <i class='header__line'></i>

          <div class='header__bottom u-flex-bc'>
              <a class='logo u-flex-bc' href='###'>
                  <img class='logo__img' src="@/assets/logo.png" alt="业务主题库管理平台" />
                  <h1 class='logo__title'>业务主题库管理平台</h1>
              </a>
              <div class='menu'>
                  <ul class='menu__ul'>
                      <li><a class='hover-underline-animation' href="###">首页</a></li>
                      <li><a class='hover-underline-animation' href="###">数据预览</a></li>
                      <li><a class='hover-underline-animation' href="###">数据监控</a></li>
                      <li><router-link :to="{ path: '/am/Collection'}" class='hover-underline-animation'>数据采集</router-link></li>
                      <li><a class='hover-underline-animation' href="###">常见问题</a></li>


                  </ul>
              </div>
          </div>
      </div>
  </header>
</template>

<script>
export default {
  name: 'dgheader',
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
.header {
    height: 160px;
    background-image: linear-gradient(to right, #2740C1, #1D6ED5);
}

.header__top {
    height: 60px;
}

.header__bottom {}

.login__entry {
    margin-left: 30px;
}

.login__entry--line {
    margin: 0 5px;
    position: relative;
    bottom: 1px;
}

.search {
    position: relative;
    width: 266px;
    height: 30px;
}

.search__input {
    width: 100%;
    height: 100%;
    padding: 0 23px;

    font-size: 14px;
    color: #3c5bd9;
    background: #fff;
    border-radius: 15px;
    border: 0;
    outline: none;
    font-weight: 600;
}

.search__input::-webkit-input-placeholder {
    color: #3c5bd9;
}

.search__input:-moz-placeholder {
    color: #3c5bd9;
}

.search__input::-moz-placeholder {
    color: #3c5bd9;
}

.search__input:-ms-input-placeholder {
    color: #3c5bd9;
}

.icon-search {
    position: absolute;
    right: 23px;
    top: 5px;

    width: 18px;
    height: 18px;
    background: url('~@/assets/search.png') center / 100% 100% no-repeat;
}

.header__line {
    width: 100%;
    height: 1px;
    top: 65px;
    position: absolute;
    right: 0;
    left: 0;
    background: url('~@/assets/dividingLine.png') center / 100% 100% no-repeat;
}

.logo__img {
    width: 36px;
    height: 36px;
}

.logo__title {
    font-size: 36px;
    margin-left: 30px;
}

.menu__ul li {
    display: inline-block;
    margin-left: 60px;
}
</style>