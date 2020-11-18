<template>
  <div id="mian">
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">财务表报</p>
    </div>
    <br />
    <div id="xia">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="财务概况" name="first">
          <div id="kuan">
            <input class="inp" placeholder="  查询起始日期" />-
            <input class="inp" placeholder="   查询截止日期" />&nbsp;&nbsp;&nbsp;
            <el-button type="warning">查询</el-button>
          </div>
          <br />
          <div class="wen">
            <img src="../../assets/img/9.png" style="float: left" width="50%" />
            <div id="you1">
              <div>
                <p>
                  总销售额：
                  <span>¥21091.78</span>
                </p>
                <p>
                  退款金额：
                  <span>¥1537</span>
                </p>
                <p>
                  未消费：
                  <span>¥14034.46</span>
                </p>
                <p>
                  未提现：
                  <span>¥188 【申请提现】</span>
                </p>
                <p>
                  已提现：
                  <span>¥4734.9</span>
                </p>
              </div>
              <div>
                <p>
                  <span>2019-01 报表</span>
                </p>
                <p>
                  2019-01 销售额
                  <span>¥0</span>
                </p>
                <p>
                  2019-01 退款金额：
                  <span>¥0</span>
                </p>
                <p>
                  2019-01 消费：
                  <span>¥0</span>
                </p>
                <p>
                  2019-01 提现：
                  <span>¥0</span>
                </p>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="销售管理" name="second">
          <div id="kuan1">
            <select class="lai">
              <option class="lai">2020</option>
              <option class="lai">2019</option>
              <option class="lai">2018</option>
            </select>
            &nbsp;&nbsp;&nbsp;
            <el-button type="warning">查询</el-button>
          </div>
          <div class="wen">
            <img src="../../assets/img/10.png" />
          </div>
        </el-tab-pane>
        <br />
        <el-tab-pane label="财务细明" name="third">
          <div id="kuan2">
            <input class="inp" placeholder="  查询起始日期" />-
            <input class="inp" placeholder="  查询截止日期" />
            &nbsp;&nbsp;&nbsp;
            <select class="lai">
              <option class="lai">2020</option>
              <option class="lai">2019</option>
              <option class="lai">2018</option>
            </select>
            &nbsp;&nbsp;&nbsp;
            <el-button type="warning">查询</el-button>
          </div>
          <br />
          <br />
          <div class="wen">
            <table>
              <tr class="tr">
                <td class="td1">日志</td>
                <td class="td2">金额</td>
                <td class="td3">发生时间</td>
              </tr>
              <tr class="tr1">
                <p>
                  本页合计：
                  <span>￥1694.05</span> 合计：
                  <span>￥19939.78</span>
                </p>
              </tr>
              <tr class="tr2">
                <td class="td1">
                  <p>D：10001  商品名称  订单：20181220100878</p>
                </td>
                <td class="td2">￥10c</td>
                <td class="td3">2018-12-12 12:00:12</td>
              </tr>
              <tr class="tr2">
                <td class="td1">
                  <p>D：10001  商品名称  订单：20181220100878</p>
                </td>
                <td class="td2">￥10c</td>
                <td class="td3">2018-12-12 12:00:12</td>
              </tr>
              <tr class="tr2">
                <td class="td1">
                  <p>D：10001  商品名称  订单：20181220100878</p>
                </td>
                <td class="td2">￥10c</td>
                <td class="td3">2018-12-12 12:00:12</td>
              </tr>
              <tr class="tr2">
                <td class="td1">
                  <p>D：10001  商品名称  订单：20181220100878</p>
                </td>
                <td class="td2">￥10c</td>
                <td class="td3">2018-12-12 12:00:12</td>
              </tr>
            </table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped>
.tr1 {
  height: 40px;
  line-height: 40px;
  background-color: rgba(231, 200, 159, 0.469);
}

.tr1 p {
  float: right;
  position: relative;
  left: -20px;
}
.tr1 p span {
  color: orange;
}
.wen {
  width: 100%;
}
table {
  width: 100%;
  height: 100%;
}
.tr {
  width: 100%;
  height: 40px;
  background-color: rgb(199, 201, 203);
  text-align: center;
  display: flex;
  line-height: 40px;
}
.tr2 {
  width: 100%;
  height: 40px;
  text-align: center;
  display: flex;
  line-height: 40px;
}
.tr2 .td1 p {
  float: left;
  position: relative;
  left: 5%;
}
tr,
td {
  box-shadow: 0 0 0 0.2px;
}
.td1 {
  flex: 7;
}
.td2 {
  flex: 1;
}
.td3 {
  flex: 2;
}

.inp {
  height: 30px;
}
.lai {
  width: 70px;
  height: 30px;
  border: none;
}
#you1 div {
  line-height: 40px;
  background-color: rgba(238, 204, 141, 0.204);
  text-indent: 20px;
  margin-top: 30px;
  box-shadow: 0 0 0 0.2px;
}
#you1 div span {
  color: orange;
}
#you1 {
  width: 50%;
  float: right;
}
#xia {
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
</style>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
    };
  }
};
</script>