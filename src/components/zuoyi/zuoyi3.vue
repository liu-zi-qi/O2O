<template>
    <div id="quan">
        <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">验证活动报名</p>
    </div>
    <div class="lei"><el-row class="demo-autocomplete">
          <el-col :span="12">
            <div class="sub-title">选择门面</div>
            <br />
            <el-autocomplete
              class="inline-input input"
              v-model="state1"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect"
            ></el-autocomplete>
          </el-col>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <p>请先验证活动报名，再接待</p>
          <el-input v-model="input" class="input" placeholder="请输入内容"></el-input>&nbsp;&nbsp;
          <input class="button" type="button" value="验证活动报名" />
        </el-row></div>
    </div>
</template>

<script>
export default {
  data() {
    name: "zuoyi1";
    return {
      activeName: "second",
      restaurants: [],
      state1: "",
      state2: ""
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return restaurant => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "花生米科技公司总部", address: "长宁区新渔路144号" },
        { value: "花生米科技公司总部", address: "长宁区新渔路144号" },
        { value: "花生米科技公司总部", address: "长宁区新渔路144号" },
        { value: "花生米科技公司总部", address: "长宁区新渔路144号" }
      ];
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.restaurants = this.loadAll();
  },methods: {
      open() {
        this.$alert('修改成功', '提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
};
</script>
<style scoped>
* {
  padding: 0;
}
.input {
  width: 200px !important;
}
.button {
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: #ff9900;
  color: aliceblue;
  border: none;
  border-radius: 5px;
}
.sub-title,input{
    margin: 20px 0;
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
.lei{
    margin-left: 50px;
}
</style>