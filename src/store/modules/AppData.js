import { request } from '@/utils/request.js'
import router from '@/router'
import qs from 'qs'
import { Message } from 'element-ui';
import { setCookie, getCookie, removeCookie } from '@/utils/cookie.js'

let state = {
    token: getCookie('token'),
    loading: false,
}

const actions = {
  login ({ commit, state, dispatch, rootState }, { userAccount, userPwd } = {}) {
    state.loading = true
	  request('/admin/user/sysUser/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'},
      data: qs.stringify({ userAccount, userPwd, type: 'account' })
    }).then(data => {
      state.loading = false
      if (data.code === 200) {
        state.token = data.user.tokenId
        setCookie('token', state.token, 7 * 24 * 60 * 60)
        router.push('/')
      } else {
        Message('登陆失败：' + data.message)
      }
    })
  },
  logout ({ commit, state, dispatch, rootState }, logout) {
    removeCookie('token')
    state.token = null
    router.push('/login')
    Message('退出成功')
  },
}

export default {
  namespaced: true,
  state,
  actions,
}