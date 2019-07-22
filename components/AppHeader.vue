<template>
  <el-menu class="appHeader" mode="horizontal">
    <el-menu-item @click="goIndex">
      <img class="logoImg" src="~/static/logo.jpg" alt="lolol">
      <h2>
        {{ AppSite.name }}
      </h2>
    </el-menu-item>
  </el-menu>
</template>
<script>
import { AppSite } from '~/untils/config';
export default {
  data:function(){
    return {
      AppSite: AppSite
    }
  },
  methods: {
    goIndex(){
      this.$router.push("/");
    }
  },
}
</script>
<style lang="scss">
.el-menu.el-menu--horizontal{
  border-bottom:0px;
}
.appHeader{
  background: linear-gradient( 135deg, #FEC163 10%, #DE4313 100%);
  .el-menu-item{
    padding:0;
    height:61px;
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
