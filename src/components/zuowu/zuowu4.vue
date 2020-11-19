<template>
  <div id="mian">
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">开票设定</p>
    </div>
    <br />
    <div id="xia">
      <div id="kuan">
        开票设定：
        <el-radio v-model="radio"  label="1">备选项</el-radio>
        <el-radio v-model="radio"  label="2">备选项</el-radio>
      </div>
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
</style>
<script>
export default {
     data () {
      return {
          value:true,
        radio: '1'
      };
    }
};
</script>