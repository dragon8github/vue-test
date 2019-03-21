import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vueWaves from './directive/waves'
import btn from '@/components/btn'
import { maybe } from './utils/utils'
import 'element-ui/lib/theme-chalk/index.css'
import '@/scss/utils.scss'

import { DatePicker, Select, Option, Cascader, MessageBox, tooltip, Message, Autocomplete, Input, Checkbox, Switch, Dropdown, DropdownMenu, DropdownItem } from 'element-ui'

Vue.component(btn.name, btn)
Vue.component(DatePicker.name, DatePicker)
Vue.component(Select.name, Select)
Vue.component(Option.name, Option)
Vue.component(Cascader.name, Cascader)
Vue.component(tooltip.name, tooltip)
Vue.component(Input.name, Input)
Vue.component(Autocomplete.name, Autocomplete)
Vue.component(Checkbox.name, Checkbox)
Vue.component(Switch.name, Switch)
Vue.component(Dropdown.name, Dropdown)
Vue.component(DropdownMenu.name, DropdownMenu)
Vue.component(DropdownItem.name, DropdownItem)

Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt


Vue.use(vueWaves)

Vue.mixin({
  methods: {
	maybe
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
