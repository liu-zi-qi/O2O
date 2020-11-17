<template>
  <div>
    <div id="shang">
      <div style="margin:0 5px;background-color: orange;float: left;">&nbsp;</div>
      <p style="float:left">商品</p>
    </div>
    
    <div id="xia">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="编号" width="180"></el-table-column>
          <el-table-column prop="name" label="详情" width="200"></el-table-column>
          <el-table-column prop="address" label="团购" width="100"></el-table-column>
          <el-table-column prop="address" label="销量/库存" width="100"></el-table-column>
          <el-table-column prop="address" label="商品分类" width="100"></el-table-column>
          <el-table-column label="操作" width="80">
            <template slot-scope="scope">
              <el-switch active-color="#13ce66" inactive-color="#ff4949" v-model="scope.row.status" @change=change(scope.$index,scope.row)></el-switch>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button size="mini" type="danger" @click="andleEdit(scope.$index, scope.row)">下架</el-button>
              <el-button size="mini" type="info" @click="handleDelete(scope.$index, scope.row)">预览</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div class="qqq" style="text-align:center">
          <p>
            共
            <span style="color:#ff9900">N</span> 条记录，当前第
            <span>N/N</span> 页
            <span
              style="
                margin:0 10px;
                padding:0 5px;
                background-color: #ff9900;
                color: #fff;
                border-radius: 5px;"
            >首页</span>
            <span
              style="
                margin:0 10px;
                padding:0 5px;
                background-color: #ff9900;
                color: #fff;
                border-radius: 5px;"
            >上一页</span>
            <span
              style="
                margin:0 10px;
                padding:0 5px;
                background-color: #ff9900;
                color: #fff;
                border-radius: 5px;"
            >下一页</span>
            <span
              style="
                margin:0 10px;
                padding:0 5px;
                background-color: #ff9900;
                color: #fff;
                border-radius: 5px;"
            >尾页</span>
            跳至
            <input type="text" value="1" />
            <span>页</span>
            <span
              style="
                margin:0 10px;
                padding:0 5px;
                background-color: #ff9900;
                color: #fff;
                border-radius: 5px;"
            >GO</span>
          </p>
        </div>
      </template>
    </div>
  </div>
</template>
         
<style scoped>
.qqq {
  width: 84%;
  margin: 0 auto;
  height: 50px;
  line-height: 50px;
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
}
</style>
<script>
export default {
  data() {
    return {
      qw: true,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
</script>
