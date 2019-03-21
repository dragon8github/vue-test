<template>
    <span>
      <button class='btn' :class='type'>
        <slot></slot>
      </button>
    </span>
</template>

<script>
export default {
  name: 'btn',
  data () {
    return {
       
    }
  },
  methods: {
      go () {

      }
  },
  props: {
    type: {
      type: String,
      default: ''
    },
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
.btn {
  width: 68px;
  height: 30px;
  border-radius: 4px;
  outline:none;
  border: solid 1px #d2d2d2;
  background-color: #ffffff;
  color: #b1b1b2;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;

  &.primary {
    border: 0;
    background-color: #1d6dd5;
    font-size: 14px;
    color: #ffffff;
  }
}
</style>