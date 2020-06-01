<template>
	<div class="goodsinfo-container">
		<transition
		@before-enter="beforeEnter"
		@enter="enter"
		@after-enter="afterEnter">
			<div class="ball" v-show="showFull" ref="ball"></div>			
		</transition>	
		<!-- 轮播图区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swiper :lunbotuList='lunbotu' :isFull="false"></swiper>
				</div>
			</div>
		</div>
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">{{goodsinfo.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价:<del>￥{{goodsinfo.market_price}}</del>&nbsp;&nbsp;销售价:<span class="now_price">￥{{goodsinfo.sell_price}}</span>
					</p>
					<p>购买数量:<numbox @getcount="getGoodsCount" :max="goodsinfo.stock_quantity"></numbox></p>
					<mt-button type="primary" size="small">立即购买</mt-button>
					<mt-button type="danger" size="small" @click="getshow">加入购物车</mt-button>
				</div>
			</div>
		</div>
		<!-- 商品介绍区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：{{goodsinfo.goods_no}}</p>
          			<p>库存情况：{{goodsinfo.stock_quantity}}件</p>
          			<p>上架时间：{{goodsinfo.add_time|dateFormat}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="getdesc(id)">图文介绍</mt-button>
				<mt-button type="danger" size="large" plain @click="getcomment(id)">商品评论</mt-button>
			</div>
		</div>
	</div>
</template>
<script>
	import swiper from '../subcomonents/swiper.vue'
	import numbox from '../subcomonents/goodsinfo_numbox.vue'
	export default {
		data(){
			return {
				id:this.$route.params.id,
				lunbotu:[],
				goodsinfo:{},
				goodscount:1,
				showFull:false
			}
		},
		created(){
			this.getLunbo()
			this.getGoodsInfo()
		},
		methods:{
			getLunbo(){
				this.$http.get('api/getthumimages/'+this.id).then(result=>{
					if (result.body.status===0) {
						result.body.message.forEach(item=>{
							item.img=item.src
						})
						this.lunbotu=result.body.message
					}
				})
			},
			getGoodsInfo(){
				this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
					if (result.body.status===0) {
						this.goodsinfo=result.body.message[0]
					}
				})
			},
			getdesc(id){
				this.$router.push({ name: "goodsdesc", params: { id } })
			},
			getcomment(id){
				this.$router.push({name:"goodscomment",params:{id}})
			},
			getGoodsCount(count){
				this.goodscount=count
				console.log(this.goodscount)
			},
			getshow(){
				this.showFull=!this.showFull
			},
			beforeEnter(el){
				el.style.transform="translate(0px,0px)"
			},
			enter(el,done){
				el.offsetWidth
				const ballPosition = this.$refs.ball.getBoundingClientRect()
				const badgePosition=document.getElementById('badge').getBoundingClientRect()
				const x=badgePosition.left-ballPosition.left
				const y=badgePosition.top-ballPosition.top
				el.style.transform=`translate(${x}px,${y}px)`
				el.style.transition="all 1s cubic-bezier(.4,-0.3,1,.68)"
				done()
			},
			afterEnter(el){ 
				this.showFull=!this.showFull
			}
		},
		components:{
			swiper,
			numbox
		}
	}
</script>
<style lang="scss" scoped>
	.goodsinfo-container {
		background-color:#ccc;
		overflow:hidden;
		.now_price{
			color:red;
			font-size:16px;
		}
		.mui-card-footer {
			display:block;
			button {
				margin:15px 0;
			}
		}
		.ball{
			width:15px;
			height:15px;
			background-color:red;
			position: absolute;
			border-radius:50%;
			z-index:99;
			left:138px;
			top:390px;
		}
	}
</style>