<template>
	<div class="container">
		<!-- Hearder 区域 -->
		<mt-header fixed title="vue商城项目">
			<span slot="left" @click="goback" v-show="flag">
    			<mt-button icon="back">返回</mt-button>
  			</span>
		</mt-header>
		<!-- 切换 区域 -->
		<router-view></router-view>	
		<!-- Tabbar 区域 -->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-i" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-i" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-i" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-i" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				flag:true
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		},
		created(){
			this.flag=this.$route.path==='/home'?false:true
		},
		watch:{
			"$route.path":function(val){
				if (val==='/home') {
					this.flag=false
				}else{
					this.flag=true
				}
			}
		}
	}
</script>
<style lang="scss" scoped>
	.container{
		padding-top:40px;
		padding-bottom:50px;
	}
// 该类名，解决 tabbar 点击无法切换的问题
	.mui-bar-tab .mui-tab-item-i.mui-active {
	    color: #007aff;
	}
	
	.mui-bar-tab .mui-tab-item-i {
	    display: table-cell;
	    overflow: hidden;
	    width: 1%;
	    height: 50px;
	    text-align: center;
	    vertical-align: middle;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    color: #929292;
	}
	
	.mui-bar-tab .mui-tab-item-i .mui-icon {
	    top: 3px;
	    width: 24px;
	    height: 24px;
	    padding-top: 0;
	    padding-bottom: 0;
	}
	
	.mui-bar-tab .mui-tab-item-i .mui-icon~.mui-tab-label {
	    font-size: 11px;
	    display: block;
	    overflow: hidden;
	    text-overflow: ellipsis;
	}
</style>
