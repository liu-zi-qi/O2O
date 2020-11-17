<template>
  <div id="quan">
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">首页</p>
    </div>
    <div id="xia">
      <div class="wen">
        订单编号：
        <span>2018122800300557</span>
        <br />消费时间：
        <span>2018-12-12 18:31:53</span>
        <br />顾客名称：
        <br />消费内容：
        <span>到店支付¥780</span>
        <br />不可优惠金额
        <span>¥600</span>
        <br />满100减20：
        <span>¥20</span>
        <br />
      </div>
      <div id="biao">
        <tr>
          <td class="qw">支付金额</td>
          <td class="qw">消费金额</td>
          <td class="qw">优惠金额</td>
        </tr>
        <tr>
          <td>￥780</td>
          <td>￥800</td>
          <td>￥20</td>
        </tr>
      </div>
      <router-link tag="div" class="dian" to="/zuoer5">返回</router-link>
    </div>
  </div>
</template>
<style scoped>
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
#xia {
  width: 80%;
  height: 500px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
.wen {
  width: 95%;
  height: 200px;
  margin: 0 auto;
  background-color: antiquewhite;
  padding: 20px;
  line-height: 30px;
}
.wen span {
  color: orange;
}
#biao {
  width: 100%;
  margin-top: 30px;
}
tr {
  width: 100%;
  display: flex;
}
.qw {
  background-color: #949191;
}
td {
  background-color: #fff;
  flex: 1;
  text-align: center;
  height: 50px;
  line-height: 50px;
  border: 1px solid;
}
.dian{
  width: 60px;
  text-align: center;
  line-height: 30px;
  height: 30px;
  color: #fff;
  border: 5px;
  padding: 10px 20px;
  background-color: rgb(5, 164, 50);
  position: relative;
  top:60px;
  left: 20px;
}
</style>