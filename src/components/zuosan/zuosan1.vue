<template>
  <div id="mian">
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">消费评论</p>
    </div>
    <br />
    <br />
    <div id="biao">
      <div id="sang">
        <input type="text" placeholder="下单起始日期" />-
        <input type="text" placeholder="下单结束日期" />&nbsp;&nbsp;&nbsp;
        <input type="text" placeholder="请输入商品名称" />&nbsp;&nbsp;
        <select>
          <option class="lai">全部</option>
          <option class="lai">已消费</option>
          <option class="lai">未消费</option>
        </select>
        <input type="button" value="确定" class="btn" />
      </div>
      <table>
        <tr class="tr1">
          <td class="td1">评论星级</td>
          <td class="td2">评论内容</td>
          <td class="td3">评论人</td>
          <td class="td4">被评论来源</td>
          <td class="td5">操作</td>
        </tr>
        <tr>
          <td class="td1">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
          </td>
          <td class="td2">
            文字评价内容
            <br />【2018-12-12 00:12:28】
          </td>
          <td class="td3">十月大神</td>
          <td class="td4">被评论来源</td>
          <td class="td5"><div class="p"><el-button type="text" @click="open">回复</el-button></div></td>
        </tr>
          <tr>
          <td class="td1">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
          </td>
          <td class="td2">
            文字评价内容
            <br />【2018-12-12 00:12:28】
          </td>
          <td class="td3">十月大神</td>
          <td class="td4">被评论来源</td>
          <td class="td5"><div class="p"><el-button type="text" @click="open">回复</el-button></div></td>
        </tr>
          <tr>
          <td class="td1">
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
          </td>
          <td class="td2">
            文字评价内容
            <br />【2018-12-12 00:12:28】
          </td>
          <td class="td3">十月大神</td>
          <td class="td4">被评论来源</td>
          <td class="td5"><div class="p"><el-button type="text" @click="open">回复</el-button></div></td>
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped>

.el-rate {
  height: 30px;
}
.el-rate__item {
  width: 30px !important;
  height: 30px !important;
}
table {
  width: 84%;
  margin: 0 auto;
  margin-top: 50px;
}
tr{
    width: 100%;
    
   box-shadow: 0 0 0 0.2px; 
}
.p .el-button--text{
    width: 80%;
    height: 80%;
    margin: 0 auto;
    background-color: rgba(45, 208, 50, 0.68);
    text-align: center;
    color: #fff;
    padding: 5px 0;
}
.tr1 {
  text-align: center;
  height: 40px;
  background-color: rgb(179, 175, 175);
}
.td3,.td4{
    text-align: center;
}
.td4{
    color: #ff9900;
}
.tr1 .td4{
    color:black
}
#biao #sang {
  width: 84%;
  margin: 0 auto;
}
#shang {
  width: 1100px;
  height: 40px;
  line-height: 40px;
  position: relative;
  left: 30px;
}
#shang div {
  height: 30px;
  position: relative;
  top: 5px;
}
.btn {
  width: 110px;
  height: 40px;
  border: none;
  float: right;
  background-color: #ff9900;
  color: #fff;
  border-radius: 5px;
}
</style>
<script>
export default {
  data() {
    return {
      value: 3.7
    };
  },
  methods: {
      open() {
        this.$prompt('', '评论内容', {
          confirmButtonText: '确定',
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '评论成功'
          });
        });
      }
    }
};
</script>