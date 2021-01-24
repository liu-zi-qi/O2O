<template>
	<view>
		<view class="to"></view>
		<view class="kuan"><text @click="qw" style="position: relative;left: -20px;">←</text>&nbsp;&nbsp;&nbsp;修改密码</view>
		<view class="input-box">
		    <view class="input-item">
		        <view class="input-label">原密码</view>
				<view class="input-body">
					<input maxlength="11" type="text" placeholder="请输入原密码" class="input" >
				</view>
		    </view>
		    <view class="input-item">
				<view class="input-label">新密码</view>
				<view class="input-body">
					<input  type="text"  style="margin-right: 50upx;" placeholder="请输入新密码" maxlength="20"  class="input" />
				</view>
		    </view>
			<view class="input-item">
				<view class="input-label">确定密码</view>
				<view class="input-body">
					<input  type="text" style="margin-right: 50upx;" placeholder="请确定新密码" maxlength="20"  class="input" />
				</view>
			</view>
		</view>
		<button class="button" >登录</button>
	</view>
</template>
<style  lang="scss" scoped>
	.to{
		background-color: #42D49B;
		height: 80px;
		width: 100%;
	}
	.kuan{
		border-radius: 5px;
		box-shadow: 5px 4px 4px 4px #000000;
		width: 80%;
		height: 70px;
		margin: 0 auto;
		line-height: 70px;
		text-align: center;
		position: relative;
		top:-20px;
		background-color: #FFFFFF;
		color: #42D49B;
	}
	button::after{
		border: none;
	}
	.input-box {
		padding: 50upx;
		font-size: 30upx;
		.input-item {
			display: flex;
			background: white;
			border-bottom: 1upx solid #eeeeee;
			line-height: 100upx;
			height: 100upx;
			.input-label {
				width: 150upx;
			}
			.input-body{
				position: relative;
				height: 100upx;
				width: calc(100% - 150upx);
				.input {
					line-height: 100upx;
					height: 100upx;
					position: relative;
					font-size: 28upx;
				}
				.eye{
					position: absolute;
					height: 50upx;
					width: 50upx;
					right: 0;
					top: 50%;
					transform: translateY(-50%);
				}
				.btn-code{
				    position: absolute;
				    right: 0upx;
				    top:50%;
				    transform: translateY(-50%);
					background: none;
					color: #205592;
					width: 160upx;
					font-size: 24upx;
					box-sizing: border-box;
					text-align: right;
					padding: 0;
					height: 100upx;
					line-height: 100upx;
				}
			}
			
		}
		
	}
	.select {
		padding-top: 40upx;
		display: flex;
		justify-content: space-between;
		color: #003B67;
		text{
			position: relative;
			left: 10px;
		}
	}
	.button{
		margin:0 30upx;
		background: #42D49B;
		border-radius:50upx;
		line-height: 80upx;
		height: 80upx;
		color: white;
		font-size: 32upx;
	}
</style>
<script>
	import {tan} from "@/common/common.js"
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			qw(){
				uni.switchTab({
					url:"me"
				})
			}
		}
	}
</script>


