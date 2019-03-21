<template>
  <div class="collection">
    <!-- 工具栏 -->
    <div class='tool'>
      <btn class='add' type='primary'>新增</btn>
      <btn class='update'>更新</btn>
    </div>

    <div class='body'>
      <div class='card'>
        <div class='card__header'>
          <article class='card__title'>查询条件</article>
        </div>
        <div class='card_body'>
          <div class='form'></div>
          <div class='status-items'>
            <div class='status-items__item'>
              <article class='status-items__item--title'>未开始</article>
              <div class='status-items__item--num'>1</div>
              <div class='status-items__item--icon icon-stop'></div>
            </div>
          </div>
        </div>

        <div class='card'>
          <article class='card__title'>作业执行列表</article>
          <div class='card_body'>
            <table></table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'collection',
  data() {
    return {

    }
  },
  methods: {
    go() {

    }
  },
  components: {
    
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
@import "~@/scss/functions.scss";

.collection {}

.body {
  margin: 0 10px;
}

.card {
  height: 478px;
  background-color: #ffffff;
  margin: auto;
}

  .card__header {
    height: 63px;
    line-height: 63px;

    .card__title {
      position: relative;
      color: #222222;
      font-weight: bold;
      font-size: 18px;
      border-bottom: 1px solid #dddddd;
      padding-left: 34px;

      &::before {
        content: '';
        @include ycenter;
        left: 21px;
        width: 4px;
        height: 22px;
        background-color: #1f63d1;
      }
    }
  }

.tool {
  height: 67px;
  line-height: 67px;
  text-align: right;
  margin: 0 30px;
}

.add {
  
}

.update {
  margin-left: 10px;
}
</style>
