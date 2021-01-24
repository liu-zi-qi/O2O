<template>
	<view class="box">
		<form class="form">
			<view class="titles">质量内容</view>
			<uni-combox :candidates="candidates1" @input="getid1" style="border: 1px solid #e6e5ea;"></uni-combox>
			<view class="titles" style="float: left;">事件位置</view>
			<view class="sjwz"><input type="text" v-model="weizi" placeholder="请输入位置" placeholder-style="font-size:14px"/></view><br/>
			<view style="clear: both;"></view>
			<view class="titles">事件部件</view>
			<uni-combox :candidates="candidates2" @input="getid2" style="border: 1px solid #e6e5ea;"></uni-combox>
			<view class="titles">事件信息描述</view>
			<textarea v-model="miaoshu" placeholder="请输入事件描述信息" placeholder-style="font-size:14px" class="sjms"/>
			<view class="titles img_sc">图片上传</view>
			<view class=""><upload-img ref='uploadImg' :mode="imgList" @chooseFile='chooseFile' @imgDelete='imgDelete' :control='control' :columnNum="columnNum" /></view>
			<view class="tijiao" @click="tijiao">提交</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				candidates1:[],
				candidates1_id:'',
				candidates2:[],
				candidates2_id:'',
				imgLists:'',
				weizi:'',
				miaoshu:'',
				token_id:''
			}
		},
		onLoad() {
			this.token_id=uni.getStorageSync('token');
		},
		created() {
			var that=this;
			uni.request({
				url:'http://139.9.169.87:9002/app/Event/getQualityListAll',
				method:'GET',
				success(zlnr) {
					for(var i=0;i<zlnr.data.data.length;i++){
						that.candidates1.push(zlnr.data.data[i].qualityContent);
					}
					console.log(zlnr.data)
				}
			});
			uni.request({
				url:'http://139.9.169.87:9002/app/Event/getPartsListAll',
				method:'GET',
				success(bjlb) {
					for(let i=0;i<bjlb.data.data.length;i++){
						that.candidates2.push(bjlb.data.data[i].partsName)
					}
					console.log(bjlb.data)
				}
			})
		},
		methods: {
			getid1(index){
				this.candidates1_id=index;
				// console.log(this.candidates1_id)
			},
			getid2(index){
				this.candidates2_id=index;
				// console.log(this.candidates2_id)
			},
			chooseFile(imgList){
				console.log(imgList)
				this.imgLists=imgList
			},
			tijiao(){
				let that= this;
				// imgLists[0],//图片
				// candidates1_id,//下拉框1
				// weizi,//输入1
				// candidates2_id,//下拉框1
				// miaoshu,//输入2
				// token_id//token值
				uni.uploadFile({
					url:'http://139.9.169.87:9002/app/Event/addEvent',
					method:'POST',
					headers:{token: that.token_id},
					filePath:that.imgLists[0],//图片地址
					formData:{//表单数据
						qualityId:that.candidates1_id,
						reportingLocation:that.weizi,
						partsId:that.candidates2_id,
						eventDesc:that.miaoshu,
						reportpersonId:that.token_id.split('-')[2]
					},
					name: 'file',
					
					success(val) {
						var res=JSON.parse(val.data);
						console.log(res)
						if(res.msg =="事件上报成功"){
							console.log("成功")
							uni.showToast({
								title:'上报成功'
							})
						}else{
							console.log(1)
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.form{
		width: 90%;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		.titles{
			font-size: 15px;
			font-weight: bold;
			margin: 15px 0px 8px 0px;
		};
		.sjwz{
			border: 1px solid #e6e5ea;
			margin: 5px 0px;
			padding: 5px 0px;
			text-indent: 5px;
			width: 70%;
			float: right;
			position: relative;
			left: -10px;
			top:5px;
		};
		.sjms{
			border: 1px solid #C0C0C0;
			text-indent: 5px;
			height: 80px;
			
		};
		
		.tijiao{
			width: 40%;
			height: 40px;
			line-height: 40px;
			margin: 0 auto;
			text-align: center;
			background: linear-gradient(to right, #aaff00,#aaff7f,#aaffff);
			color: white;
			border-radius: 20px;
			margin-top: 15px;
		};
		.img_sc{
			margin: 20px 0px 15px 0px;
		}
	}
</style>
