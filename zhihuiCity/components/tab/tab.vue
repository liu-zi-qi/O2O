<template>
	<view>

		<!-- <srcolltab class="navbar" :tabBars="ModuleCateList" :statusObj="statusObj" @fromSrcoll="fromSrcoll"></srcolltab> -->

		<view class="navTabBox">
			<!-- 标题数量小于5 -->

			<!-- 标题数量大于5 开启长导航栏模式 -->
			<view class="longTab">
				<scroll-view scroll-x="true" style="white-space: nowrap; display: flex" scroll-with-animation :scroll-into-view="toView">
					<view class="longItem" :data-index="index" :class="index==tabindex?'click':''" v-for="(item,index) in orderlist"
					 :key="index" :id="'id'+index" @click="longClick(index,item.cate_id)">{{item.zhuang}}</view>
					<!-- <view class="underlineBox" :style='"transform:translateX("+isLongWidth*statusObj.status+"px);"'>
							<view class="underline"></view>
						</view> -->
				</scroll-view>
			</view>
		</view>
		<view class="plr py-3">
		<view v-if="tabindex==0">
		<!-- 	我是标签一 -->
			<links></links>
			
		</view>
		<view v-if="tabindex==1">
			<links></links>
		</view>
		<view v-if="tabindex==2">
			我是标签三
		</view>
		<view v-if="tabindex==3">
			我是标签4
		</view>
		</view>
	</view>

	</view>
</template>

<script>
	import srcolltab from '@/components/srcollorder.vue';
    // import links from '../links/links.vue'
	export default {
		components: {
			srcolltab,
			// links
		
		},
		name: 'navTab',
		props: {
			tabBars: {
				type: Array
			},
		},
		data() {
			return {

				tabClick: null, //导航栏被点击
				isLeft: 0, //导航栏下划线位置
				isWidth: 0, //每个导航栏占位
				toView: '',
				isLongWidth: 0,
				tabindex: 0,

				statusObj: {
					cate_id: 1
				},
				module: 'sharemechanic',
				shop_class: '',
				ModuleCateList: [],
				ShopList: [],
				longitude: '0',
				latitude: '0',
				currentPage: 'order',
				city: '北京',

				orderlist: [{
						zhuang: '全部',
						dropdown: false
					},
					{
						zhuang: '未完成',
						dropdown: false
					},
					{
						zhuang: '进行中',
						dropdown: false
					},
					{
						zhuang: '已完成',
						dropdown: false
					}
				],

				tabCurrentIndex: 0,
			}
		},
		onLoad(e) {


			var that = this
			// 获取设备宽度
			// this.longClick(2,14)
			uni.getSystemInfo({
				success(e) {
					that.isWidth = e.windowWidth / that.ModuleCateList.length //宽度除以导航标题个数=一个导航所占宽度
					that.isLongWidth = e.windowWidth / 5
				}
			})
			this.isLeft = this.statusObj.cate_id * this.isLongWidth
			this.toView = 'id0'
			this.toView = `id${this.statusObj.cate_id}`
			
			
			
		},
		onPullDownRefresh() {
			this.getModuleCate()
			this.getShopList()
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		onShow() {
			uni.getStorage({
				key: 'address',
				success: res => {
					// console.log(res)
					this.city = res.data.city
				}
			})
		},
		methods: {
			longClick(index, cate_id) {

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


			},


			qudropdown(index) {
				this.orderlist[index].dropdown = !this.orderlist[index].dropdown;
				this.daiorderlist[index].dropdown = !this.daiorderlist[index].dropdown;
			},

			
		}
	}
</script>

<style lang="scss">
	/* container999定义于app.vue */

	.navTabBox {
		width: 100vw;
		padding: 18upx 0upx;
		font-size: 15px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.06);

		.click {
			color: #15D6A3 !important;
			border-bottom: 2px solid #15D6A3;
			    border-radius: 0 0 102% 100%/0 0 100% 100%;
		}

		.longTab {
			width: 100%;

			.longItem {
				// width: 7%;
				margin: 0 40rpx;
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
					background-color: #15D6A3;
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

	.fangxing {
		height: 220rpx;
		width: 220rpx;
	}

	.yuan {
		width: 82rpx;
		height: 82rpx;
	}

	.qudropdown {
		z-index: 99999;
	}

	.dropdownposition {
		position: absolute;
		bottom: -160rpx;
		z-index: 9;
	}

	.quxiao {
		width: 120rpx;
		text-align: center;
	}

	.icon_chakan {
		width: 32rpx;
		height: 10rpx;
	}

	.img_chanpin {
		width: 160rpx;
		height: 160rpx;
	}

	.swiper-box {
		height: 2000rpx;
	}

	.content {
		position: absolute;
		top: 0;
		width: 100%;
	}

	.commonScroll {
		height: 100%;
		white-space: nowrap;
	}

	.navbar {
		display: flex;
		height: 40px;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0, 0, 0, .06);
		position: relative;

		// z-index: 10;
		&.active {
			position: fixed;
			top: pxToRem(140);
			right: 0;
			left: 0;
			z-index: 10;
			margin: 0 pxToRem(30);
			background: white;
		}

		.nav-item {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 15px;
			position: relative;

			&.current {
				color: #15D6A3;

				&:after {
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 2px solid #15D6A3;
				}
			}
		}
	}
</style>
