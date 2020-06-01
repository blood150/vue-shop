<template>
	<div class="goodsdesc_container">
		<h1>{{goodsdesc.title}}</h1>
		<hr>
		<div class="content" v-html="goodsdesc.content"></div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				id:this.$route.params.id,
				goodsdesc:{}
			}
		},
		created(){
			this.getGoodsDesc()
		},
		methods:{
			getGoodsDesc(){
				this.$http.get('api/goods/getdesc/'+this.id).then(result=>{
					if (result.body.status===0) {
						this.goodsdesc=result.body.message[0]
					}
				})
			}
		}
	}
</script>
<style lang="scss">
	.goodsdesc_container{
		padding:4px;
		h1{
			font-size:14px;
			color:#226aff;
			text-align:center;
			margin:15px 0;
		}
		.content {
			img {
				width:100%;
			}
		}
	}
</style>