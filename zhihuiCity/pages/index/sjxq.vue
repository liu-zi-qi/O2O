<template>
	<view class="box">
		<view class="xq">
			<view class="tile">
				<view class="left"><uni-icons type="map-filled" color="#4AD79E"></uni-icons><text>内容:道路上垃圾没及时清理时清...</text></view>
				<view class="right">待派发</view>
			</view>
			<view class="nei">
				<view class="biaotou"><label>事件内容：</label><text>岳阳大道中海路人行路上垃圾没有得到及时清理</text></view>
				<view class="biaotou"><label>当前状态：</label><text>待派发</text></view>
				<view class="biaotou"><label>上报位置：</label><text>岳阳楼区南湖大道</text></view>
				<view class="biaotou"><label>部件：</label><text>岳阳大道西</text></view>
				<view class="biaotou"><label>负责人：</label><text>test</text></view>
				<view class="biaotou"><label>上报人：</label><text>MissZhou</text></view>
				<view class="biaotou"><label>上报时间：</label><text>2020.09.2918:26:27</text></view>
				<view class="biaotou"><label>派发类型：</label><text>自动派发</text></view>
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
		width: 98%;
		margin: 0 auto;
		background-color: #FAFAFA;
		display: flex;
		flex-direction: column;
		border-radius: 5px;
		font-size: 15px;
		// box-shadow: ;
		.tile{
			display: flex;
			flex-direction: row;
			width: 96%;
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
			width: 96%;
			display: flex;
			flex-direction: column;
			margin: 0 auto;
			.biaotou{
				color: #999999;
				font-size: 16px;
				padding: 5px 0px;
				display: flex;
				flex-direction: row;
				label{
					flex: 1.2;
					text-align: right;
				}
				text{
					flex: 3.5;
					// margin-left: 7px;
					color: #333333;
				}
			}
		}
	}
</style>
