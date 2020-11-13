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
          <!-- tr列0td行 -->
          <tr>
            <td class="td1">详情</td>
            <td class="td2" style="color:blue">发票信息</td>
            <td class="td3" style="color:blue">单价</td>
            <td class="td6" style="color:blue">数量</td>
            <td class="td7" style="color:blue">状态</td>
            <td class="td4" >操作</td>
          </tr>
          <tr>
            <p>
              订单号：
              <span>2018122800300557</span>，交易时间：
              <span>2018-12-28 00:30:05</span>
            </p>
          </tr>
          <tr>
            <td class="td1">
              <img src="../../assets/img/8.png" />
              <span class="qq">商城自提商品名称，需要验证</span>
            </td>
            <td class="td2 qq">不开发票</td>
            <td class="td3 qq">￥19</td>
            <td class="td4 qq">1</td>
            <td class="td5 qq">待验证</td>
            <td class="td6 qq">
              <span
                style="margin:0 10px;
                padding:5px 10px;
                background-color:rgb(6, 251, 22);;
                color: #fff;
                border-radius: 5px;"
              >详情</span>
            </td>
          </tr>
          <tr>
            <p>
              订单号：
              <span>2018122800300557</span>，交易时间：
              <span>2018-12-28 00:30:05</span>
            </p>
          </tr>
          <tr>
            <td class="td1">
              <img src="../../assets/img/8.png" />
              <span class="qq">商城自提商品名称，需要验证</span>
            </td>
            <td class="td2 qq">不开发票</td>
            <td class="td3 qq">￥19</td>
            <td class="td4 qq">1</td>
            <td class="td5 qq">待验证</td>
            <td class="td6 qq">
              <span
                style="margin:0 10px;
                padding:5px 10px;
                background-color:rgb(6, 251, 22);;
                color: #fff;
                border-radius: 5px;"
              >详情</span>
            </td>
          </tr>

          <tr>
            <p>
              订单号：
              <span>2018122800300557</span>，交易时间：
              <span>2018-12-28 00:30:05</span>
            </p>
          </tr>
          <tr>
            <td class="td1">
              <img src="../../assets/img/8.png" />
              <span class="qq">商城自提商品名称，需要验证</span>
            </td>
            <td class="td2 qq">不开发票</td>
            <td class="td3 qq">￥19</td>
            <td class="td4 qq">1</td>
            <td class="td5 qq">待验证</td>
            <td class="td6 qq">
              <span
                style="margin:0 10px;
                padding:5px 10px;
                background-color:rgb(6, 251, 22);;
                color: #fff;
                border-radius: 5px;"
              >详情</span>
            </td>
          </tr>
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
.qq {
  line-height: 100px;
}
.tab tr:nth-of-type(1) {
  background-color: #c4c1c17b;
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.tab {
  width: 100%;
  border: 1px solid;
}
.tab tr {
  display: flex;
}
.td1 {
  flex: 3;
}

.td1 img {
  margin: 15px 0;
  float: left;
}

.td2,
.td3,
.td4,
.td5,
.td6,
.td7 {
  flex: 1;
  text-align: center;
}
tr:nth-of-type(even) {
  background-color: #f3ff0928;
}
tr:nth-of-type(even) p {
  width: 100%;
  text-indent: 2%;
  margin: 1% 0;
}
tr:nth-of-type(even) p span {
  color: #ff9900;
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
  name: "zuoer2"
};
</script>