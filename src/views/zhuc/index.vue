<template>
  <div id="mian">
    <div id="kuan">
        <h2>O2O商城商家后台系统</h2>
      <input type="text" placeholder="登录账号（pmgod）" />
      <input type="butten" placeholder="登录密码（pmgod.cn）"/>
      <input type="text" placeholder="区分大小写"/>
      <div id="wen"><em><p>
        <span style="color:red;">a</span>
        <span style="color:#666;">b</span>
        <span style="color:#f9f9f9;">c</span>
        <span style="color:blue;">d</span></p></em>
      </div>
      <button>登录</button>
      <router-link tag="p" to="zhu">免验证直接登录</router-link>
    </div>
  </div>
</template>
<script>
export default {
    name:'zhuc',
    
}
</script>
<style scoped>
    #mian{
        width: 100%;
        height:750px;
        background-image: url("../../assets/img/1.png");
        background-size:100% 100%;
    }
    #kuan{
        width: 24.6%;
        height: 421px;
        position: relative;
        left: 65.5%;
        top: 23%;
    }
    #kuan h2{
        position: relative;
        left: 60px;
        top: 58px;
        color: orange;
    }
    #kuan input:nth-of-type(1){
        position: relative;
        left: 84px;
        top: 74px;
        float: left;
        height: 41px;
        width: 247px;
        border: none;
        outline: none;
    }   
    #kuan input:nth-of-type(2){
        position: relative;
        left: 84px;
        top: 111px;
        float: left;
        height: 46px;
        width: 247px;
        border: none;
        outline: none;
    }
    #kuan input:nth-of-type(3){
        position: relative;
        left: 80px;
        top: 143px;
        float: left;
        height: 46px;
        width: 147px;
        border: none;
        outline: none;
    }
    #wen{
        width: 70px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        position: relative;
        float: right;
        left: -51px;
        top: 151px;
        background-color: rgba(42, 3, 3, 0.945);
    }
    #kuan button{
        font-size: 18px;
        text-align: center;
        position: relative;
        left: -80px;
        top: 319px;
        background: none;
        color: aliceblue;
        border: none;
        outline: none;
    }
    #kuan>p{
        position: relative;
        top: 344px;
        left: 23px;
        font-size: 12px;
        color: orange;
    }
</style>