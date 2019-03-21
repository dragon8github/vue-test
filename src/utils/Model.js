import { getUUID, isEmptyObject } from '@/utils/utils.js'

export default class Model {
	constructor ({ size = 20 } = {}) {
		// 核心数据
		this.data = null
		// token
		this.token = ''
		// 是否加载中
		this.loading = false
		// 是否数据为空
		this.empty = false
		// 是否正在加载更多
		this.loadingmore = false
		// 是否没有更多了
		this.nomore = false
		// 总数
		this.total = 0
		// 页码
		this.page = 0
		// 数量
		this.size = this._size = size
		// 是否报错了
		this.error = ''
	}

	// 重置
  resetWhere () {
	  this.token = ''
	  this.loading = false
	  this.empty = false
	  this.loadingmore = false
	  this.nomore = false
	  this.total = 0
	  this.page = 0
	  this.size = this._size 
	  this.error = ''
  }

  // 显示loading并且返回token
  showLoading () {
    this.loading = true
  }

  // 显示loadingmore并且返回token
  showLoadingmore () {
    this.loadingmore = true
  }

  // 隐藏loading
  hideLoading () {
    this.loading = false
  }

  // 隐藏Loadingmore
  hideLoadingmore () {
    this.loadingmore = false
  }

  // 页码++
  pagePlus () {
	  this.page++
  }

  // 是否是第一次加载
  isFirstPage () {
    return this.page === 0
  }

  // 刷新token并且返回token
  refreshToken () {
    return this.token = getUUID()
  }

  // 设置data以及一系列逻辑
  setData ({ data = [], total = 0, token = ''} = {}, cb = null) {
    // 如果token不一致，说明请求被覆盖了。应该中止逻辑演变
    if (token && this.token != token) return

    this.total = total
    this.loading = false
    this.loadingmore = false
    
    const isEmptyData = data.length === 0 || isEmptyObject(data)

    // empty 表示没有数据
    if (this.isFirstPage() && isEmptyData) 
      this.empty = true
    
    // nomore 表示没有更多数据
    if (data.length < this.size || (!this.isFirstPage() && isEmptyData)) 
      this.nomore = true
    
    // 如果有数据，应该重置标识
    if (!isEmptyData) {
      this.empty = false
      // 就算有数据，如果不够长度，也是数据nomore
      if (data.length === this.size)
        this.nomore = false
    }

    if (this.isFirstPage())
      this.data = data
    else
      this.data = Array.prototype.concat.call(this.data || [], data)

    // 执行回调
    cb && cb(this)
  }
}