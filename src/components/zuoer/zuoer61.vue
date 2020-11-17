<template>
  <div id="dian">
    <div class="yin">
      <div id="biao">
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style="float: left;">&nbsp;&nbsp;订单详情</span>
        <span style="float: right;">
          <router-link tag="p" to="/zuoer6">
            <img src="../../assets/u353.png" />&nbsp;&nbsp;&nbsp;&nbsp;
          </router-link>
        </span>
      </div>
      <div id="wenzi">
        <tr class="qe">下单时间：2018-12-12 21:20:20</tr>
        <tr class="qe">下单会员：十月大神</tr>
        <tr class="qe">商品总价：￥2800</tr>
        <tr class="qe">订金抵扣：￥800（订金￥100）</tr>
        <tr class="qe">尾款金额：￥2000</tr>
        <tr class="qe">配送信息：十月大神，18800000000，广东省广州市越秀区东园横路1号</tr>
        <br />
        <tr class="zz">
          <td>商品名称</td>
          <td>商品单价</td>
          <td>结算单价</td>
          <td>数量</td>
          <td>总价</td>
          <td>状态</td>
        </tr>
        <tr class="zz">
          <td>预售商品名称</td>
          <td>￥2800</td>
          <td>￥2500</td>
          <td>1</td>
          <td>￥2800</td>
          <td>待付订金</td>
        </tr>
      </div>
      <br/>
      <div><router-link tag="div" class="dian" to="/zuoer6">确定</router-link></div>
    </div>
  </div>
</template>
<style scoped>
#dian {
  width: 100%;
  height: 78%;
  background-color: rgb(117, 115, 115);
  padding-top: 150px;
}
.qe{
  width: 600px !important
}
.yin {
  width: 700px;
  height: 400px;
  margin: 0 auto;
  background-color: #fff;
}
#biao {
  width: 100%;
  height: 40px;
  background-color: orange;
  line-height: 40px;
  color: #fff;
}
#wenzi {
  padding-top: 100px;
  width: 600px;
  margin: 0px auto;
}

tr{
  width:900px;
  margin: 0 auto;
  box-shadow: 0 0 0 0.2px;
}
.zz td {
  width: 100px;
  text-align: center;
  font-size: 15px;
  box-shadow: 0 0 0 0.2px;
}
.dian {
  width: 60px;
  text-align: center;
  height: 30px;
  color: #fff;
  border: 5px;
  padding: 10px;
  background-color:orange;
  margin: 0 auto;
}
</style>