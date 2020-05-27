<template>
	<div class="photoinfo_container">
		<h3>{{photolist.title}}</h3>
		<p class="subtitle">
			<span>
				发表时间:{{photolist.add_time|dateFormat}}
			</span>
			<span>
				点击{{photolist.click}}次
			</span>
		</p>
		<hr>
		<!-- 缩略图区域 -->
		<div class="thumbs">
      		<vue-preview :slides="list" @close="handleClose"></vue-preview>
    	</div>
		<div class="content" v-html="photolist.content"></div>
		<!-- 子组件 -->
		<comment-box :id="this.id"></comment-box>
	</div>
</template>
<script>
	import commit from '../subcomonents/commit.vue'
	export default {
		data(){
			return {
				id:this.$route.params.id,
				photolist:{},
				list:[]
			}
		},
		created(){
			this.getphotoinfo()
			this.getThumbs()
		},
		methods:{
			getphotoinfo(){
				this.$http.get('api/getimageInfo/'+this.id).then(result=>{
					if (result.body.status===0) {
						this.photolist=result.body.message[0]
					}
				})
			},
			getThumbs() {
     			this.$http.get("api/getthumimages/" + this.id).then(result => {
     			  if (result.body.status === 0) {
     			    // 循环每个图片数据，补全图片的宽和高
     			    result.body.message.forEach(item => {
     			      item.msrc=item.src
     			      item.w = 600
     			      item.h = 400
     			    });
     			    this.list = result.body.message;
     			  }
     			})
     		}
		},
		components:{
			"comment-box":commit
		}
	}
</script>
<style lang="scss" scoped>
.photoinfo_container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
    /deep/ .my-gallery {
      display: flex;
      flex-wrap: wrap;
      figure {
        width: 30%;
        margin: 5px;
        img {
          width: 100%;
          box-shadow: 0 0 8px #999;
          border-radius: 5px;
        }
      }
    }
  }
}	
</style>