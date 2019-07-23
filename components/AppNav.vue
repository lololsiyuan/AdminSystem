<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        router
        :default-active="$route.path"
        >
        <el-menu-item :index="item.index" v-for="item in NavHeader" :key="item.name" v-if="item.bIsSubmenu==false">
          <i :class="item.icon"></i>
          <span slot="title">{{ item.name }}</span>
        </el-menu-item>
        <el-submenu :index="item.index" v-else>
          <template slot="title">
            <i :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item v-for="(menuitem, menuindex) in item.subMenu" :index="menuitem.index" :key="menuindex">
              <i :class="item.icon"></i>
              <span slot="title">{{ menuitem.name }}</span>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
import { AppSite,NavHeader } from '~/untils/config';
export default {
  data:function(){
    return {
      AppSite: AppSite,
      NavHeader:NavHeader,
    }
  },
  mounted() {
    console.log(this,AppSite);
  },
  methods: {
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
