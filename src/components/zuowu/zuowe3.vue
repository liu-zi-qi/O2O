<template>
  <div id="mian">
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">银行账户</p>
    </div>
    <br />
    <div id="xia">
      <div id="wen">
        商户名称：
        <span>花生米科技有限公司</span>
      </div>
      <br />
      <div id="biao">
        <table>
          <tr>
            <td>
              <p>开户行名称：</p>
            </td>
            <td>
              <input type="text" placeholder="请输入开户银行名称：" />
            </td>
          </tr>
          <tr>
            <td>
              <p>开户行账号：</p>
            </td>
            <td>
              <input type="text" placeholder="请输入银行账户：" />
            </td>
          </tr>
          <tr>
            <td>
              <p>真实姓名：</p>
            </td>
            <td>
              <input type="text" placeholder="请输入银行账户名称：" />
            </td>
          </tr>
          <tr>
            <td>
              <p>图形验证码：</p>
            </td>
            <td>
              <input type="text" placeholder="图形验证码" />&nbsp;
              <img src="../../assets/img/11.png" />
            </td>
          </tr>
          <tr>
            <td>
              <p>短信验证码：</p>
            </td>
            <td>
              <input type="text" placeholder="短信验证码" />&nbsp;&nbsp;&nbsp;
              <el-button type="warning">查询</el-button>
            </td>
          </tr>
        </table>

         <el-button type="warning" class="qw">保存</el-button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.qw{
  position: relative;
  left: 100px;
}
input {
  height: 35px;
  position: relative;
  left: 10px;
}
input+img{
  position: relative;
  left: 20px;
  top:10px;
}
#biao {
  width: 100%;
  height: 500px;
}
table {
  width: 100%;
  height: 70%;
}
td {
  box-shadow: 0 0 0 0.2px;
}
table tr {
  display: flex;
  line-height: 60px;
}
table tr td:nth-of-type(1) {
  flex: 1;
}
td p {
  float: right;
}
table tr td:nth-of-type(2) {
  flex: 4;
}
#xia {
  width: 84%;
  margin: 0 auto;
}
#wen {
  height: 40px;
  line-height: 40px;
  background-color: antiquewhite;
  width: 100%;
  padding: 10px;
}
#wen span {
  color: orange;
}
#shang {
  width: 1100px;
  height: 40px;
  line-height: 40px;
  position: relative;
  left: 5%;
}
#shang div {
  height: 30px;
  position: relative;
  top: 5px;
}
</style>
<script>
export default {};
</script>