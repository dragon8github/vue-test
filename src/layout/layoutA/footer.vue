<template>
<!-- 底部 -->
<footer class='footer'>
    <div class="footer__container u-flex-bs">
        <div class='footer__company'>
            <a class='footer__company--top' href='###'>
                <img class='footer__company--logo' src="@/assets/logo.png" alt="业务主题库管理平台" />
                <h1 class='footer__company--name'>业务主题库管理平台</h1>
            </a>
            <div class="footer__company--bottom">粤公网安备 44010602000929号</div>
        </div>
        <div class='footer__cooperation'>
            <div class='footer__title'>合作伙伴</div>
            <ul class='footer__items'>
                <li class='footer__item'><a class='hover-underline-animation' href="###">东莞政务服务网</a></li>
                <li class='footer__item'><a class='hover-underline-animation' href="###">东莞阳光网</a></li>
            </ul>
        </div>
        <div class='footer__about'>
            <div class='footer__title'>关于我们</div>
            <ul class='footer__items'>
                <li class='footer__item'><a class='hover-underline-animation' href="###">微信公众号</a></li>
                <li class='footer__item'><a class='hover-underline-animation' href="###">官网首页</a></li>
            </ul>
        </div>
        <div class='footer__contact'>
            <div class='footer__title'>联系我们</div>
            <ul class='footer__items'>
                <li class='footer__item'><a class='hover-underline-animation' href="###">地址：东莞市南城鸿福路金融大街1号</a></li>
                <li class='footer__item'><a class='hover-underline-animation' href="###">电话：（0769）883346</a></li>
            </ul>
        </div>
    </div>
</footer>
</template>

<script>
export default {
  name: 'dgfooter',
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

.footer {
    height: 234px;
    background-image: linear-gradient(to right, #2655CE, #2069D5);
    padding-top: 60px;
    font-size: 12px;
}

.footer__container {
    width: 1111px;
    margin: auto;
}

.footer__company {}

.footer__company--top {
    display: inline-block;
    padding-bottom: 45px;
}

.footer__company--logo {
    width: 26px;
    height: 26px;
}

.footer__company--name {
    font-size: 24px;
    display: inline-block;
    margin: 0;
    margin-left: 20px;

    position: relative;
    bottom: 3px;
    letter-spacing: 2px;
}

.footer__cooperation {}

.footer__title {
    margin-bottom: 32px;
}

.footer__items {}

.footer__item {
    margin-bottom: 14px;
}

.footer__about {}

.footer__contact {}
</style>