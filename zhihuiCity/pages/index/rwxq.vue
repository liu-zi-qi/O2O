<template>
	<view class="box">
		<view class="xq">
			<view class="tile">
				<view class="left"><uni-icons type="map-filled" color="#4AD79E"></uni-icons><!-- <text>临时任务：洗扫</text> --></view>
				<view class="right">未完成</view>
			</view>
			<view class="nei">
				<view class="biaotou">任务名称：<text>洗扫</text></view>
				<view class="biaotou">任务类型：<text>临时任务</text></view>
				<view class="biaotou">任务状态：<text>未完成</text></view>
				<view class="biaotou">排班时间：<text>2020.09.01至2020.09.30</text></view>
				<view class="biaotou">作业内容：<text>作业内容12</text></view>
				<view class="biaotou">创建时间：<text>2020.09.02 19:23:30</text></view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		padding-top: 10px;
	}
	.xq{
		// margin-top: 20px;
		width: 90%;
		margin: 0 auto;
		background-color: #FAFAFA;
		display: flex;
		flex-direction: column;
		border-radius: 5px;
		// box-shadow: ;
		.tile{
			display: flex;
			flex-direction: row;
			width: 94%;
			margin: 0 auto;
			justify-content: space-between;
			padding: 15px 0px;
			border-bottom: 1px #C0C0C0 dashed   ;
			.left{
				text{
					margin-left: 10px;
					font-size: 17px;
					font-weight: bolder;
				}
			};
			.right{
				color: red;
			}
		};
		.nei{
			width: 94%;
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			.biaotou{
				color: #999999;
				font-size: 16px;
				padding: 5px 0px;
				text{
					margin-left: 7px;
					color: #333333;
				}
			}
		}
	}
</style>
