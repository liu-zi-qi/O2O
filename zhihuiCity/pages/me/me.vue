<template>
	<view class="box">
		<view class="top">
			<view class="tupian"><image src="../../static/logo.png" style="" mode=""></image></view>
			<view class="names">
				<text class="text1">咸鱼</text>
				<view class="text2">又是悠哉的一天</view>
			</view>
			<view class="right"><image src="../../static/qqqq.png" mode=""></image></view>
		</view>
		<view class="hr"></view>
		
		<view class="tab">
			<view class="lis">
				<view class="hang"@click="qw">
					<uni-icons class="item1" type="upload" size="25"></uni-icons>
					<text>我的上报</text>
					<uni-icons class="item2" type="arrowright" size="23"></uni-icons>
				</view>
				<view class="hang">
					<uni-icons class="item1" type="chat" size="25"></uni-icons>
					<text>消息</text>
					<uni-icons class="item2" type="arrowright" size="23"></uni-icons>
				</view>
				<view class="hang">
					<uni-icons class="item1" type="paperplane" size="25"></uni-icons>
					<text>意见反馈</text>
					<uni-icons class="item2" type="arrowright" size="23"></uni-icons>
				</view>
				<view class="hang">
					<uni-icons class="item1" type="gear" size="25"></uni-icons>
					<text>设置</text>
					<uni-icons class="item2" type="arrowright" size="23"></uni-icons>
				</view>
				<view class="hang" @click="qq">
					<uni-icons class="item1" type="info" size="25"></uni-icons>
					<text>修改密码</text>
					<uni-icons class="item2" type="arrowright" size="23"></uni-icons>
				</view>
			</view>
		</view>
		<view class="tijiao" ><navigator url="../login/login">退出登录</navigator></view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			qq(){
				uni.navigateTo({
					url:"sz"
				})
			},
			qw(){
				uni.switchTab({
					url:"../sjsb/sjsb"
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.top{
		display: flex;
		flex-direction: row;
		align-items: center;
		padding: 15px 0px;
		.tupian{
			flex: 1;
			text-align: center;
			// width: 100px;
			// height: 100px;
			// overflow: hidden;
			// border-radius: 50px;
			image{
				width: 55px;
				height: 55px;
				border-radius: 50px;
			}
		};
		.names{
			flex: 2;
			.text1{
				font-size: 20px;
				font-weight: bolder;
			};
			.text2{
				font-size: 15px;
				color: #999999;
				margin: 5px 0px;
			}
		};
		.right{
			flex: 1;
			text-align: center;
			image{
				width: 40px;
				height: 40px;
			}
		}
	}
	.hr{
		height: 10px;
		background-color: #efefef;
	}
	.lis{
		width: 90%;
		margin: 0 auto;
		.hang{
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 20px 0px;
			border-bottom: 1px #f1f1f1 solid;
			.item1{
				flex: 0.5;
				text-align: center;
				
			};
			text{
				flex: 1;
			};
			.item2{
				flex: 2;
				text-align: right;
			}
		}
	}
	.tijiao{
		width: 40%;
		height: 40px;
		line-height: 40px;
		margin: 0 auto;
		text-align: center;
		background: linear-gradient(to right, #3AD9A3,#36D4AF,#2BC7CE);
		color: white;
		border-radius: 20px;
		margin-top: 15px;
	};
</style>
