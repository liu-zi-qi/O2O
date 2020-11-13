<template>
  <div id="qian">
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">首页</p>
    </div>
    <br />
    <br />
    <div id="liebiao">
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
      <br />
      <br />
      <div id="xia">
        <table class="tab">
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="date" label="优惠券名称" width="180"></el-table-column>
            <el-table-column prop="name" label="会员" width="180"></el-table-column>
            <el-table-column prop="address" label="领取时间"></el-table-column>
            <el-table-column prop="date" label="过期时间" width="180"></el-table-column>
            <el-table-column prop="name" label="消费时间" width="180"></el-table-column>
            <el-table-column prop="address" label="消费门店"></el-table-column>
            <el-table-column prop="address" label="状态"></el-table-column>
          </el-table>

          <tr style="text-align:center">
            <p>
              共
              <span style="color:#ff9900">N</span> 条记录，当前第
              <span>N/N</span> 页
              <span
                style="
                margin:0 10px;
                padding:0 5px;
                background-color: #ff9900;
                color: #fff;
                border-radius: 5px;"
              >首页</span>
              <span
                style="
                margin:0 10px;
                padding:0 5px;
                background-color: #ff9900;
                color: #fff;
                border-radius: 5px;"
              >上一页</span>
              <span
                style="
                margin:0 10px;
                padding:0 5px;
                background-color: #ff9900;
                color: #fff;
                border-radius: 5px;"
              >下一页</span>
              <span
                style="
                margin:0 10px;
                padding:0 5px;
                background-color: #ff9900;
                color: #fff;
                border-radius: 5px;"
              >尾页</span>
              跳至
              <input type="text" value="1" />
              <span>页</span>
              <span
                style="
                margin:0 10px;
                padding:0 5px;
                background-color: #ff9900;
                color: #fff;
                border-radius: 5px;"
              >GO</span>
            </p>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<style scoped>
#quan {
  width: 100%;
}

#liebiao {
  padding: 0 40px;
}
.lai {
  border: none;
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
#shang {
  width: 1100px;
  height: 40px;
  line-height: 40px;
}
#shang div {
  height: 30px;
  position: relative;
  top: 5px;
}
</style>
<script>
export default {
  name: "zuoer4",
   data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
};
</script>