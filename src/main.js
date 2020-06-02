//入口文件
import Vue from 'vue'
//导入app根组件
import app from './App.vue'

//导入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
var car=JSON.parse(localStorage.getItem('car')||'[]')
var store=new Vuex.Store({
	state:{//this.$store.state.***
		car:car
	},
	mutations:{//this.$store.commit('方法名',参数)
		//点击购物车按钮，把数据保存到store的car上
		addtocar(state,goodsinfos){
			var flag=false
			state.car.some(item=>{
				if (item.id==goodsinfos.id) {
					item.count+=goodsinfos.count
					flag=true
					return true
				}
			})
			if (!flag) {
				state.car.push(goodsinfos)
			}
			localStorage.setItem('car',JSON.stringify(state.car))
		},
		updatecount(state,goodsinfos){
			state.car.some(item=>{
				if (item.id==goodsinfos.id) {
					item.count=parseInt(goodsinfos.count)
					return true
				}
			})
			localStorage.setItem('car',JSON.stringify(state.car))
		},
		removeFormCar(state,id){
			state.car.some((item,i)=>{
				if (item.id==id) {
					state.car.splice(i,1)
					return true
				}
			})
			localStorage.setItem('car',JSON.stringify(state.car))			
		},
		updateGoodsSelected(state,selected){
			state.car.some(item=>{
				if (item.id==selected.id) {
					item.selected=selected.selected
					return true
				}
			})
			localStorage.setItem('car',JSON.stringify(state.car))						
		}
	},
	getters:{//this.$store.getters.***
		getAllCount(state){
			var c=0
			state.car.forEach(item=>{
				c+=item.count
			})
			return c
		},
		getGoodsCount(state){
			var o={}
			state.car.forEach(item=>{
				o[item.id]=item.count
			})
			return o
		},
		getGoodsSelected(state){
			var b={}
			state.car.forEach(item=>{
				b[item.id]=item.selected
			})
			return b
		}
	}
})

//按需导入mint-ui组件
//import { Header, Swipe, SwipeItem, Button,Lazyload } from 'mint-ui'
//Vue.component(Header.name, Header)
//Vue.component(Swipe.name, Swipe)
//Vue.component(SwipeItem.name, SwipeItem)
//Vue.component(Button.name, Button)
//懒加载
//Vue.use(Lazyload)
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

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

// 安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//导入vue-resource，使用$http
import VueResource from 'vue-resource'
//安装vue-resource
Vue.use(VueResource)
//设置请求的根路径
Vue.http.options.root = 'http://api.cms.liulongbin.top/';
// 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;


var vm=new Vue({
	el:'#app',
	data:{

	},
	render:c=>c(app),
	router,//1.4挂载创建VM实例
	store
})