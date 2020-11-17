<template>
  <div id="soy">
    <div id="so">
      <div id="zuo">
        <div id="tu">
          <img src="../../assets/img/logo.png" width="28%" height="28%" />
          <p>O2O城市系统商户管理平台</p>
        </div>
      </div>
      <div id="you">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
        >
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">十月大神</template>
            <el-menu-item index="2-1">
              <p>
                账户信息
                <router-link tag="span" class="mima" to="/xgmm">修改密码</router-link>
              </p>
            </el-menu-item>
            <el-menu-item index="2-2">登录用户：18912345678</el-menu-item>
            <el-menu-item index="2-3">上次登录：2018-12-28 18:00:00</el-menu-item>
            <el-menu-item index="2-4">登录地区：广东省 广州市（IP：183.18.18.31）</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <img src="../../assets/img/3.png" />
            </template>
            <el-menu-item index="3-1" class="qq">
              <img src="../../assets/img/2.png" />
              您有3笔外卖订单未接单
              <br />
              <span>2018-12-28 09:18:00</span>
            </el-menu-item>
            <el-menu-item index="3-2" class="qq">
              <img src="../../assets/img/2.png" />
              您有3笔外卖订单未接单
              <br />
              <span>2018-12-28 09:18:00</span>
            </el-menu-item>
            <el-menu-item index="3-3" class="qq">
              <img src="../../assets/img/2.png" />
              您有3笔外卖订单未接单
              <br />
              <span>2018-12-28 09:18:00</span>
            </el-menu-item>
          </el-submenu>
          <el-menu-item index="4">
            <router-link tag="div" to="/zhu/soyei">
              <img src="../../assets/img/4.png" />
            </router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <router-link tag="div" to="/">
              <img src="../../assets/img/5.png" />
            </router-link>
          </el-menu-item>
        </el-menu>
      </div>
    </div>
    <div id="zhuyao">
      <el-container style="height: 690px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '4']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>验证管理
              </template>
              <el-menu-item index="1-1">
                <router-link tag="p" to="/zuoyi1">验证消费券</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link tag="p" to="/zuoyi2">验证优惠券</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link tag="p" to="/zuoyi3">验证活动报名</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>订单管理
              </template>
              <el-menu-item index="2-1">
                <router-link tag="p" to="/zuoer1">1</router-link>
              </el-menu-item>
              <el-menu-item index="2-2">
                <router-link tag="p" to="/zuoer2">2</router-link>
              </el-menu-item>
              <el-menu-item index="2-3">
                <router-link tag="p" to="/zuoer3">3</router-link>
              </el-menu-item>
              <el-menu-item index="2-4">
                <router-link tag="p" to="/zuoer4">4</router-link>
              </el-menu-item>
              <el-menu-item index="2-5">
                <router-link tag="p" to="/zuoer5">5</router-link>
              </el-menu-item>
              <el-menu-item index="2-6">
                <router-link tag="p" to="/zuoer6">6</router-link>
              </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>评论管理
              </template>
              <el-menu-item index="3-1">
                <router-link tag="p" to="/zuosan1">1</router-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                <router-link tag="p" to="/zuosan1">1</router-link>
              </el-menu-item>
              <el-menu-item index="3-3">
                <router-link tag="p" to="/zuosan1">1</router-link>
              </el-menu-item>
              <el-menu-item index="3-4">
                <router-link tag="p" to="/zuosan1">1</router-link>
              </el-menu-item>
            </el-submenu>
           
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-setting"></i>项目管理
              </template>
              <el-menu-item index="4-1">s
              </el-menu-item>
              <el-menu-item index="4-2">
              </el-menu-item>
              <el-menu-item index="4-3">
              </el-menu-item>
              <el-menu-item index="4-4">
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>

        <el-container>
          <el-main>
            <!-- 写插件 -->
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "soy",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-main {
  padding: 0;
}
.el-aside {
  color: #333;
}
#so {
  width: 100%;
  height: 60px;
  line-height: 60px;
  background-color: #ff8800;
  position: relative;
  color: aliceblue;
}
#so p {
  color: aliceblue;
}
#zuo {
  position: absolute;
  left: 20px;
  float: left;
  width: 35%;
}
#zuo tu {
  float: left;
}
#zuo p {
  width: 350px;
  float: right;
}
#you {
  width: 35%;
  height: 100%;
  float: right;
}
.el-menu-demo {
  background: #ff8800;
  color: #ffffff;
}

.el-menu-item:hover {
  background-color: rgb(245, 181, 42) !important;
}
[class*=" el-icon-"],
[class^="el-icon-"] {
  display: none !important;
}
.mima {
  float: right;
  color: orange;
}
.you {
  float: right;
}
.zuo {
  float: left;
}
.qq {
  height: 80px !important;
  width: 230px !important;
}
</style>
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/element-ui/lib/index.js"></script>
