<template>
  <div id="gai">
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">修改密码</p>
    </div>
    <br />
    <div id="gai1">
      <div id="zuo">
        <p>
          <span style="color:red">*</span>原密码
        </p>
        <p>
          <span style="color:red">*</span>新密码
        </p>
        <p>
          <span style="color:red">*</span>确定新密码
        </p>
      </div>
      <div id="you">
        <input type="text" />
        <br />
        <input type="text" />
        <br />
        <input type="text" />
      </div>
      <div id="dian1">
          <el-button type="text" @click="open" class="dian" style="background-color:orange;">保存</el-button>
          <el-button type="text"  class="dian" style="background-color: rgba(0, 249, 253, 0.626);"><router-link tag="div" to='/zhu/soyei'>取消</router-link></el-button>
    </div>
    </div> 
  </div>
</template>
<style scoped>
* {
  padding: 0;
}
#dian1 .dian{
    position: relative;
    left: 25%;
    width: 180px;
    height: 50px;
    background-color: rgba(0, 249, 253, 0.626);
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
#gai1{
    width: 100%;
    height: 400px;
}
#zuo{
    width: 28%;
    height: 250px;
    position: relative;
    top:30px;
    float: left;
    color: black!important;
}
#zuo p{
    width: 100%;
    text-align: right;
    color: black;
    margin:20px 0;
}
#you{
    float: right;
    width: 68%;
    height: 250px;
    position: relative;
    top:28px;
}
#you input{
    width: 250px;
    height: 30px;
    margin: 15px 0;
}
</style>
<script>
import { MessageBox } from 'element-ui';
export default {
    name:'xgmm',
   methods: {
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
}
</script>