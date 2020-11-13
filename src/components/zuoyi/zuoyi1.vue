<template>
  <div id="quan">
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">验证消费劵</p>
    </div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="消费劵验证" name="first">
        <el-row class="demo-autocomplete">
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
          <p>请先验证消费劵，再接待</p>
          <el-input v-model="input" class="input" placeholder="请输入内容"></el-input>&nbsp;&nbsp;
           <el-button type="text" @click="open">验证消费劵</el-button>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="消费劵批量验证" name="second"><el-row class="demo-autocomplete">
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
          <p>请先验证消费劵，再接待</p>
          <el-input v-model="input" class="input" placeholder="请输入内容"></el-input>&nbsp;&nbsp;<br/><br/><br/><br/>
          <img src="../../assets/img/7.png"><br/><br/>
          <el-button type="text" @click="open">验证消费劵</el-button>
        </el-row>
        </el-tab-pane>
      <el-tab-pane label="超级验证" name="third">
        <el-row class="demo-autocomplete">
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
          <p>请先验证消费劵，再接待</p>
          <el-input v-model="input" class="input" placeholder="请输入内容"></el-input>&nbsp;&nbsp;
          <el-button type="text" @click="open">验证消费劵</el-button>
        </el-row>
      </el-tab-pane>
    </el-tabs>
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
  },
   methods: {
      open() {
        this.$alert('错误', '错误', {
          confirmButtonText: '确定',
        });
      }
    }
};
</script>
<style >
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
.el-tabs {
  margin-left: 50px;
}
.el-tab-pane p {
  margin: 30px 0;
}
.el-button{
  background-color: #ff9900!important;
  color: #fff!important;
  width: 150px;
  height: 40px;
}
.el-message-box__header{
  background-color: #ff9900!important;
}
.el-message-box__header span{
  color: #fff!important;
}
.el-message-box__message{
  text-align: center!important;
}
.el-tabs__item{
   text-align: center!important;
   float: none;
   border-radius: 5px;
   padding: 0 10px!important;
   background-color: #f8f8f8;
}
.el-tabs__item.is-active{
  background-color: #ff9900!important;
  color: #fff!important;
 
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
