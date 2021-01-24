<template>
	<view class="box">
		<view class="content">
			<h2>智慧城市</h2>
			<view class="items">
				<view class="item">
					<view class="num">{{worknum}}</view>
					<view>今日作业人数</view>
				</view>
				<view class="item">
					<view class="num">{{sjnum}}</view>
					<view>今日事件数</view>
				</view>
				<view class="item">
					<view class="num">{{rwnum}}</view>
					<view>今日任务数</view>
				</view>
			</view>
		</view>
		<!-- <view class="masx">
			<view class="rw" @click="rw">
				<image src="../../static/旗帜.png" style="width: 18px;height: 18px;"></image><text>任务</text>
			</view>
			<view class="sj" @click="sj">
				<image src="../../static/dp.png" style="width: 18px;height: 18px;"></image><text>事件</text>
			</view>
		</view> -->
		<view class="mian">
			<view @click="rw">
				<view>任务接受</view>
				<view>每天任务计划</view>
				<view>查看详情</view>
			</view>
			<view @click="rw">
				<view>突发事件</view>
				<view>每天突发情况</view>
				<view>查看详情</view>
			</view>
		</view>
		<view class="rwlist">
			<text class="text1">任务列表</text>
			<text class="text2">查看更多>></text>
		</view>
		<view class="lst">
			<view class="lst_left">
				<view class=""><uni-icons type="map-filled" color="#4AD79E" size="21"></uni-icons><text style="margin-left: 5px;">临时任务：洗扫</text></view>
				<view class="zt">任务状态：<text style="color: red;">未完成</text></view>
			</view>
			<view class="lst_right" @click="rwxq">查看详情</view>
		</view>
		<view class="lst">
			<view class="lst_left">
				<view class=""><uni-icons type="map-filled" color="#4AD79E" size="21"></uni-icons><text style="margin-left: 5px;">临时任务：洗扫</text></view>
				<view class="zt">任务状态：<text style="color: red;">未完成</text></view>
			</view>
			<view class="lst_right" @click="rwxq">查看详情</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				worknum:0,
				sjnum:0,
				rwnum:0
			}
		},
		onLoad() {

		},
		created() {
			
			uni.request({
				url:"http://139.9.169.87:9002/app/Task/getTaskListAll",
				success(val) {
					console.log(val)
					// this.worknum
				}
			})
		},
		methods: {
			rw(){
				wx.navigateTo({
					url:"./rwList"
				})
			},
			sj(){
				wx.navigateTo({
					url:"./sjxq"
				})
			},
			rwxq(){
				wx.navigateTo({
					url:"./rwxq"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mian>view {	
		color: #fff;
		font-size: 16px;
		width: 43%;
		height: 100px;
		border-radius: 8px;
		line-height: 30px;
		padding-left: 15px;
		box-sizing: border-box;
	}
	.mian>view:nth-of-type(1) {
		background-color: #F0AD4E;
	}
	.mian>view>view:nth-of-type(1) {
		font-size: 18px;
		font-weight: bold;
	}
	
	.mian>view>view:nth-of-type(2) {
		font-size: 16px;
		color: #9DF4D3;
	}
	
	.mian>view>view:nth-of-type(3) {
		font-size: 14px;
		font-weight: bold;
	}
	
	.mian>view:nth-of-type(2) {
		background-color:#5CDBA4
	}
	
	.mian {
		display: flex;
		justify-content: space-around;
		height: 170px;
		height: 96%;
		align-items: center;
	}
	.content{
		width: 100%;
		height: 160px;
		background-image: url(../../static/home-header-bg.png);
		background-repeat: no-repeat;
		background-size: 100% 80px;
		h2{
			text-align: center;
			color: #FFFFFF;
			font-weight: 500;
			line-height: 65px;
		};
		.items{
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin-top: 15px;
			border-radius: 10px;
			background-color: #FFFFFF;
			height: 85px;
			width: 96%;
			margin: 0 auto;
			box-shadow:1px 1px 3px #000;
			.item{
				text-align: center;
				margin: 0px 15px;
				.num{
					color: #F0AD4E;
					font-size: 25px;
				}
			}
		};
	}
	.masx{
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 30px;
		view{
			background-color: #4AD79E;
			color: #FFFFFF;
			font-size: 16px;
			width: 135px;
			height: 70px;
			line-height: 70px;
			text-align: center;
			margin: 0px 10px;
			text{
				margin: 0px 5px;
			}
		}
	}
	.rwlist{
		width: 90%;
		margin: 0 auto;
		padding-top: 25px;
		margin-bottom: 20px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: flex-end;
		.text1{
			font-size: 20px;
			font-weight: bolder;
			color: #20b4b4;
		};
		.text2{
			font-size: 14px;
			color: #999999;
		}
	}
	.lst{
		width: 90%;
		margin: 20px auto;
		margin-top: 20px;
		background-color: #f0f0f0;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 15px 0px;
		border-radius: 8px;
		.lst_left{
			margin-left: 10px;
			view{
				padding: 4px 0px;
			};
			.zt{
				color: #686868;
			}
		};
		.lst_right{
			margin-right: 10px;
			padding: 8px 15px;
			background: linear-gradient(to right, #3AD9A3,#36D4AF,#2BC7CE);
			color: white;
			border-radius: 20px;
		}
	}
</style>
