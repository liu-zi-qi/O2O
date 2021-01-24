<template>
    <view>
		<view class="to">
			<view style="height: 50px;"></view>
			<text>账号密码登录</text>
		</view>
        <view class="input-box">
            <view class="input-item">
                <view class="input-label">账号</view>
				<view class="input-body">
					<input v-model="phone" maxlength="11" type="text" placeholder="请输入账号" class="input" >
				</view>
            </view>
            <view class="input-item">
				<view class="input-label">密码</view>
				<view class="input-body">
					<input v-model="password" type="text" :password="isHidePassword?true:false" style="margin-right: 50upx;" placeholder="请输入密码" maxlength="20"  class="input" />
					<image @click="isHidePasswordClick" class="eye" :src="isHidePassword?'/static/img/attention.png':'/static/img/attention_forbid.png'"></image>
				</view>
            </view>
        </view>
        <button class="button" @click="login">登录</button>
		<br/>
		<view class="select">
		    <navigator url="/pages/register/register" hover-class="none"><text>注册</text></navigator>
		    <navigator url="/pages/forget-pwd/forget-pwd" hover-class="none">忘记密码？</navigator>
		</view>
    </view> 
</template>
<script>
	import {checkPhone,checkPwd,tan} from "@/common/common.js"
	export default {
		data() {
			return {
				isHidePassword:true,
				phone:"",
				password:"",
				qq:"0"
			};
		},
		onLoad() {
		},
		methods: {
			isHidePasswordClick(){
				this.isHidePassword=!this.isHidePassword;
			},
			login(){
				if(!checkPhone(this.phone)){
					return;
				};
				if(!checkPwd(this.password)){
					return;
				};
				var datas=this.$qs.stringify({
					loginName:this.phone,
					loginPassword:this.password,
					});
				uni.request({
					url:"http://139.9.169.87:9002/app/Employee/doLogin",
					data:datas,
					method:'POST',
					header:{'content-type':'application/x-www-form-urlencoded'},
					success(res){
						console.log(res)
						if(res.data.status==200){
							uni.setStorageSync('token',res.data.data);
							uni.switchTab({
							url:'../index/index'
						})
						
						}else if(res.data.status==400){
							if(!tan(this.qq)){
								return;
							};
						}
					}	
				})
			}
		},
	}
</script>
<style lang="scss" scoped>	
	button::after{
		border: none;
	}
	.to{
		font-size: 25px;
		position: relative;
		left: 30px;
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
		background: #08B6F2;
		border-radius:50upx;
		line-height: 80upx;
		height: 80upx;
		color: white;
		font-size: 32upx;
	}
</style>


