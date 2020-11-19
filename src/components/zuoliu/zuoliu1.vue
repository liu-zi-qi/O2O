<template>
  <div id="mian">
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">门店列表</p>
    </div>
    <br />
    <div id="xia">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="已上线" name="first">
            用户管理
            </el-tab-pane>
        <el-tab-pane label="已下线" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="审核中" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="审核记录" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<style scoped>
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
#xia {
  width: 84%;
  margin: 0 auto;
}
</style>
<script>
export default {
     data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
};
</script>