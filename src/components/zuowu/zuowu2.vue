<template>
  <div id="mian">
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">商户体现</p>
    </div>
    <br />
    <div id="xia">
      <div id="wen">
        <br />
        <p>
          当前账户余额：
          <span>￥188</span>
        </p>
        <p>
          冻结余额：
          <span>￥0</span> [包含订单完成后1天内的冻结贷款、提现审核中的冻结提现款]
        </p>
        <p>
          可提现余额：
          <span>￥188</span>
        </p>
        <p>
          提现银行名称：
          <span>中国建设银行</span>
        </p>
        <p>
          提现银行账户：
          <span>6221 0000 0000 0000 0000</span>
        </p>
      </div>
      <div id="xian">
        <p>
          提现金额&nbsp;
          <input class="inp" placeholder="   请输入银行账户名称" />
        </p>
        <p>
          提现金额&nbsp;
          <input class="inp1" placeholder="   图形校验码" />
        </p>
        <p>
          提现金额&nbsp;
          <input class="inp1" placeholder="   短信验证码" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <el-button type="warning">发送验证码</el-button>
        </p>
        <br />
        <el-button type="warning">提交申请</el-button>
      </div>
      <br />
      <h4>提现记录</h4>
      <br />
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="提现时间" width="300"></el-table-column>
        <el-table-column prop="name" label="提现金额" width="150"></el-table-column>
        <el-table-column prop="add" label="状态" width="150"></el-table-column>
        <el-table-column prop="address" label="备注"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<style scoped>
#xia {
  width: 84%;
  margin: 0 auto;
}
#xian p {
  line-height: 80px;
}
input {
  position: relative;
  left: 30px;
  height: 20px;
}
#wen {
  width: 100%;
  height: 200px;
  background-color: antiquewhite;
  line-height: 25px;
  text-indent: 30px;
}
#wen p {
  margin-bottom: 10px;
}
#wen p span {
  color: orange;
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
</style>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2018-12-12 10:00:00",
          name: "￥100",
          add:"提现成功",
          address: ""
        },
        {
          date: "2018-12-12 10:00:00",
          name: "￥100",
          add:"提现成功",
          address: ""
        },
        {
          date: "2018-12-12 10:00:00",
          name: "￥100",
          add:"提现成功",
          address: "银行账户与账户名对应错误"
        },
        {
          date: "2018-12-12 10:00:00",
          name: "￥100",
          add:"提现成功",
          address: "银行账户与账户名对应错误"
        },{
          date: "2018-12-12 10:00:00",
          name: "￥100",
          add:"提现成功",
          address: "银行账户与账户名对应错误"
        }
      ]
    };
  }
};
</script>