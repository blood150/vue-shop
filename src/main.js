//入口文件
import Vue from 'vue'
//导入app根组件
import app from './App.vue'
//按需导入mint-ui组件
import { Header, Swipe, SwipeItem, Button } from 'mint-ui'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)
//导入mui样式
import './lib/mui/css/mui.min.css'

//导入mui扩展图标样式
import './lib/mui/css/icons-extra.css'
//全局过滤器，时间
import moment from 'moment'
Vue.filter('dateFormat', function (dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern)
})

//1.1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)
//1.3导入自己的router.js模块
import router from './router.js'

//导入vue-resource，使用$http
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://api.cms.liulongbin.top/';

var vm=new Vue({
	el:'#app',
	data:{

	},
	render:c=>c(app),
	router//1.4挂载创建VM实例
})