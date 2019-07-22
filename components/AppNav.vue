<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu>
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">导航1</span>
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航2</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import { AppSite } from '~/untils/config';
export default {
  data:function(){
    return {
      AppSite: AppSite
    }
  },
  mounted() {
    console.log(this,AppSite);
  },
}
</script>
<style lang="scss">
.tac .el-menu{
  background:none;
  border-right:0px;
  .el-menu-item{
    padding:0;
    h2{
      display: inline-block;
      color:#333;
      padding:0px 10px;
      font-size:26px;
    }
    border:0px;
    &:not(.is-disabled):hover{
      background:#f8c302;
    }
  }
  .logoImg{
    height:60px;
    width:auto;
  }
}
</style>
