<template>
	<view class="navTabBox">
		<!-- 标题数量小于5 -->

		<!-- 标题数量大于5 开启长导航栏模式 -->
		<view class="longTab" v-if="statusObj.cate_id!=null">
			<scroll-view scroll-x="true" style="white-space: nowrap; display: flex" scroll-with-animation :scroll-into-view="toView">
				<view class="longItem" :data-index="index" :class="index==tabindex?'click':''" v-for="(item,index) in tabBars"
				 :key="index" :id="'id'+index" @click="longClick(index,item.cate_id)">{{item.name}}</view>
				<!-- <view class="underlineBox" :style='"transform:translateX("+isLongWidth*statusObj.status+"px);"'>
					<view class="underline"></view>
				</view> -->
				
			</scroll-view>
		</view> 
	</view>
</template>

<script>
	export default {
		name: 'navTab',
		props: {
			tabBars: {
				type: Array
			},
			statusObj:{
				type: Object
			}
		},
		data() {
			return {
				tabClick: null, //导航栏被点击
				isLeft: 0, //导航栏下划线位置
				isWidth: 0, //每个导航栏占位
				toView: '',
				isLongWidth: 0,
				tabindex:0,
			};
		},
		created() {
			// console.log(this.statusObj.status)
			var that = this
			// 获取设备宽度
			// this.longClick(2,14)
			uni.getSystemInfo({
				success(e) {
					that.isWidth = e.windowWidth / that.tabBars.length //宽度除以导航标题个数=一个导航所占宽度
					that.isLongWidth = e.windowWidth / 5
				}
			})
			this.isLeft = this.statusObj.cate_id * this.isLongWidth
			this.toView = 'id0'
			this.toView = `id${this.statusObj.cate_id}`
		},
		methods: {
			longClick(index,cate_id) {
				// console.log(index)
				var tempIndex = index - 2
				tempIndex = tempIndex <= 0 ? 0 : tempIndex
				this.toView = `id${tempIndex}` //动画滚动,滚动至中心位置
				this.statusObj.cate_id = index //设置导航点击了哪一个
				
				this.tabindex = index
				// console.log(this.tabindex);
				// console.log(cate_id);
				this.isLeft = index * this.isLongWidth //设置下划线位置
				// console.log(this.isLeft)
				this.$parent.currentTab = index //设置swiper的第几页
				// if(index==6) { // 说明是退换货
				// 	this.$emit('fromSrcoll','6,7,8,9')
				// }else {
					
				// 	this.$emit('fromSrcoll',status)
				// }
				this.$emit('fromSrcoll',cate_id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.navTabBox {
		width: 100vw;
		padding: 20upx 0upx;
		font-size: 15px;

		.click {
			color: #3dabfa!important;
		}

		.longTab {
			width: 100%;

			.longItem {
				width: 20%;
				height: 50upx;
				display: inline-block;
				line-height: 40upx;
				text-align: center;
				color: #222;
			}

			.underlineBox {
				height: 3px;
				width: 20%;
				display: flex;
				align-content: center;
				justify-content: center;
				transition: .5s;

				.underline {
					width: 84upx;
					height: 4px;
					background-color: #3dabfa;
				}
			}
		}

		.shortTab {
			width: 100%;

			.navTab {
				display: flex;
				width: 100%;
				height: 90upx;
				position: relative;

				.navTabItem {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					font-size: 15upx;
				}
			}

			.underlineBox {
				height: 3px;
				display: flex;
				align-content: center;
				justify-content: center;
				transition: .5s;

				.underline {
					width: 84upx;
					height: 3px;
					background-color: white;
				}
			}
		}
	}
</style>

