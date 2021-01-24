<template>
	<view>
		<view class="link-container">
			<view class="link-item" v-for="(item, index) in links" :key="index" @tap="goToLink(index)">
				<view class="logo">
					<image src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-rihu44gdukg39f3b25/7e19c920-4a6a-11eb-a16f-5b3e54966275.png"></image>
				</view>
				<view class="link-middle">
					<view class="title">
						{{item.taskType}}:{{item.taskName}}
					</view>
					<view class="desciption">
						任务状态:
						<span class="color">{{item.taskStatus}}</span>
					</view>
				</view>
				<view class="go-link">
					<view class="btn" @click="linsxq">
						查看详情
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				links: '',
				total: 1,
			}
		},
		onLoad() {
			this.loadLinks();
			
		},
		methods: {
			linsxq(){
				uni.navigateTo({
					url:"../../pages/index/rwxq"
				})
			},
			goToLink: function(e) {
				let link = this.links[e]
				console.log(link)
				uni.navigateToMiniProgram({
					appId: link.app_id,
					path: link.url,
					extraData: {},
					success(res) {
						// 打开成功
					}
				})
			},
			loadLinks: function() {
				let url = '/link?app_id=' + this.WeChat
				this.$http.get(url).then(res => {
					console.log(res)
					let links = res.data.data
					if (links) {
						this.links = links
					}
					this.total = links.length
				})
			}
		},
		created() {
			var thas=this;
			uni.request({
				url:"http://139.9.169.87:9002/app/Task/getTaskListAll",
				success(res){
					console.log(res)
					thas.links=res.data.data
					
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f1f1f1 !important
	}

	.link-container {
		margin: 50rpx 30rpx;
	}

	.link-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		height: 100rpx;
		padding: 30rpx;
		margin: 20rpx auto;
		background-color: #ffffff;
		border-radius: 10upx;
		box-shadow: 0 5upx 20upx 0upx rgba(0, 0, 150, .2);
	}

	.logo image {
		border-radius: 50%;
		width: 100rpx;
		height: 100rpx;
		box-shadow: 0 0 2px 1px rgba(0, 140, 186, 0.5);
	}

	.link-middle {
		width: 70%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 0 20rpx;
	}

	.title {
		vertical-align: text-top;
		font-size: 32rpx;
		font-weight: 500;
	}

	.desciption {
		font-size: 26rpx;
		color: #333333;
		.color{
			color: red;
		}
	}

	.go-link {
		display: flex;
		flex-direction: column;
		justify-items: center;
		justify-content: center;
		    width: 32%;
		  background: linear-gradient(to right,#3ADAA2, #35D4B1, #2CC8CB);
		    border-radius: 35px;
		    height: 42px;
		    padding: 0px 5px;
		    text-align: center;
		    color: white;
	}

	.go-link image {
		height: 50rpx;
		width: 50rpx;
	}
</style>
