<template>
  <div class="home">
    <div class="top-info">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="card-info">
            <div class="cardInfo-img">
              <i class="el-icon-s-check"></i>
            </div>
            <div class="cardInfo-cont">
              100+ <br>
              <p>11</p>
            </div>
          </div>
          <p class="card-title">数据统计</p>
        </el-col>
        <el-col :span="6">
          <div class="card-info bg-red">
            <div class="cardInfo-img">
              <i class="el-icon-s-help"></i>
            </div>
            <div class="cardInfo-cont">
              100+ <br>
              <p>11</p>
            </div>
          </div>
          <p class="card-title">数据统计</p>
        </el-col>
        <el-col :span="6">
          <div class="card-info bg-bule">
            <div class="cardInfo-img">
              <i class="el-icon-s-platform"></i>
            </div>
            <div class="cardInfo-cont">
              100+ <br>
              <p>11</p>
            </div>
          </div>
          <p class="card-title">数据统计</p>
        </el-col>
        <el-col :span="6">
          <div class="card-info bg-puple">
            <div class="cardInfo-img">
              <i class="el-icon-s-flag"></i>
            </div>
            <div class="cardInfo-cont">
              100+ <br>
              <p>11</p>
            </div>
          </div>
          <p class="card-title">数据统计</p>
        </el-col>
      </el-row>
    </div>
    <div class="cont-info">
      22222
    </div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import VeLine from 'v-charts/lib/line.common'

// Vue.component(VeLine.name, VeLine)

export default {
  layout:'page',
  data() {
    return {
    }
  },
  mounted() {
    // this.userName = this.$route.query.userName;
    // const succeIfo = this.userName+'，欢迎您！';
    // console.log(succeIfo,this.$route);
    // this.$message({
    //   message: succeIfo,
    //   type: 'success'
    // });
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
}
</script>

<style lang="scss">
$facebook-color:#3f51b5;
$twitter-color:#03a9f4;
$google-color:#f44336;
$puple-color:#9c27b0;
.card-info{
  display: flex;
  width:100%;
  &>div{
    width:50%;
    height:80px;
    line-height: 80px;
    text-align:center;
  }
  &>div.cardInfo-img{
    font-size:40px;
    border:1px solid $facebook-color;
    color:$facebook-color;
  }
  &>div.cardInfo-cont{
    font-size:28px;
    line-height: 50px;
    border:1px solid $facebook-color;
    background: $facebook-color;
    color:#fff;
    p{
      font-size:15px;
      line-height: 30px;
      margin-top:-5px;
    }
  }
  &.bg-bule{
    &>div.cardInfo-img{
      border:1px solid $twitter-color;
      color:$twitter-color;
    }
    &>div.cardInfo-cont{
      border:1px solid $twitter-color;
      background: $twitter-color;
    }
  }
  &.bg-red{
    &>div.cardInfo-img{
      border:1px solid $google-color;
      color:$google-color;
    }
    &>div.cardInfo-cont{
      border:1px solid $google-color;
      background: $google-color;
    }
  }
  &.bg-puple{
    &>div.cardInfo-img{
      border:1px solid $puple-color;
      color:$puple-color;
    }
    &>div.cardInfo-cont{
      border:1px solid $puple-color;
      background: $puple-color;
    }
  }
}
.card-title{
  text-align: center;
  color:#333;
  font-size:20px;
  margin-top:10px;
}
.cont-info{

}
</style>
