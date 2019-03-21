<template>
<header class='header u-flex-bc'>
  <!-- 左侧LOGO和菜单 -->
  <div class='header__left u-flex-bc'>
    <div class='header__logo'>
      <a class='logo u-flex-bc' href='/Home'>
          <img class='logo__img' src="@/assets/logo.png" alt="业务主题库管理平台" />
          <h1 class='logo__title'>业务主题库管理平台</h1>
      </a>
    </div>
    <div class='menu'>
        <ul class='menu__ul'>
            <li><a class='hover-underline-animation' href="###">首页</a></li>
            <li><a class='hover-underline-animation' href="###">数据预览</a></li>
            <li><a class='hover-underline-animation' href="/Collection">数据监控</a></li>
            <li><a class='hover-underline-animation' href="###">数据采集</a></li>
            <li><a class='hover-underline-animation' href="###">常见问题</a></li>
        </ul>
    </div>
  </div>
  <!-- 右侧搜索和登录 -->
  <div class='header__right u-flex-bc'>
    <div class='search'>
        <input class='search__input' type="text" placeholder="输入文字搜索" />
        <i class='icon-search'></i>
    </div>
    <div class='login__entry'>
        <a href="###">登录</a>
        <span class='login__entry--line'>|</span>
        <a href="###">注册</a>
    </div>
  </div>
</header>
</template>

<script>
export default {
  name: 'amheader',
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
@import "~@/scss/functions.scss";

.header {
    height: 102px;
    background-image: linear-gradient(to right, #2740C1, #1D6ED5);
    padding: 0 30px;
}

.header__top {
    height: 60px;
}

.header__bottom {}

.login__entry {
    margin-left: 54px;
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

.header__left {
  height: 100%;
  line-height: 102px;
}

.logo__img {
    width: 36px;
    height: 36px;
}

.logo__title {
    font-size: 36px;
    margin: 0;
    margin-left: 30px;
}

.menu {
  height: 100%;
}

.menu__ul {
  margin-left: 67px;
  height: 100%;
}

.menu__ul li {
    display: inline-block;
    margin-left: 60px;
    height: 100%;
}
</style>