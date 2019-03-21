import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

// layoutA
const layoutA = r => require.ensure([], () => r(require('@/layout/layoutA')), 'layoutA')
// 首页
const Home = r => require.ensure([], () => r(require('@/pages/Home')), 'Home')

// layoutB
const layoutB = r => require.ensure([], () => r(require('@/layout/layoutB')), 'layoutB')
// 数据采集
const Collection = r => require.ensure([], () => r(require('@/pages/Collection')), 'Collection')

// 路由配置
var router = new Router({
  mode: 'history',
  routes: [
	// 重定向首页
	{ path: '/', redirect: '/dg/Home' },
	// layoutA
	{ path: '/dg', component: layoutA, children: [
		// 重定向数据中心
		{ path: '/', redirect: 'Home' },
		// 数据中心
		{ path: 'Home', name: 'Home', meta: { title: '数据中心' }, component: Home },
	]},
	// layoutB
	{ path: '/am', component: layoutB, children: [
		// 重定向数据采集
		{ path: '/', redirect: 'Collection' },
		// 数据采集
		{ path: 'Collection', name: 'Collection', meta: { title: '数据采集' }, component: Collection },
	]},
  ]
})

router.beforeEach((to, from, next) => {
	// page-loading  启动
	NProgress.start()
	// 更新 vuex 状态 - 标题
	store.dispatch('SET_TITLE', to.meta.title + ' - 欢迎来到东莞市教育数据中心！')
    // 放行页面
    next()
})

// 全局路由钩子
router.afterEach((to, from) => {
	// page-loading 关闭
	NProgress.done()
})

export default router