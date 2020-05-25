//导入路由包
import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import NewsList from './components/newslist/NewsList.vue'
import NewsInfo from './components/newslist/NewsInfo.vue'

var router =new VueRouter({
	routes:[
	{path:'/',redirect:'/home'},
	{path:'/home',component:HomeContainer},
	{path:'/member',component:MemberContainer},
	{path:'/shopcar',component:ShopcarContainer},
	{path:'/search',component:SearchContainer},
	{path:'/home/newslist',component:NewsList},
	{path:'/home/newsinfo/:id',component:NewsInfo}
	],
	linkActiveClass: 'mui-active'//默认路由高亮显示
})

export default router