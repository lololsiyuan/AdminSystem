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
      <no-ssr>
      <el-row class="chart-info" :gutter="20">
        <el-col :span="12">
          <ve-line :data="chartData" :settings="chartSettings"></ve-line>
        </el-col>
        <el-col :span="12">
          <ve-histogram :data="barData" :settings="barSettings"></ve-histogram>
        </el-col>
      </el-row>
      </no-ssr>
      <el-table
        :data="tableData"
        style="width: auto">
        <el-table-column
          label="时间"
          width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.date }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="收货地址">
          <template slot-scope="scope">
            <i class="el-icon-location-outline"></i>
            <span style="margin-left: 10px">{{ scope.row.address }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="收货人名称">
          <template slot-scope="scope">
            <i class="el-icon-s-custom"></i>
            <span style="margin-left: 10px">{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
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
    this.chartSettings = {
      xAxisType: 'time'
    }
    this.barSettings = {
      metrics: ['访问用户', '下单用户'],
      dimension: ['日期']
    }
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '2018-01-01', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '2018-01-02', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '2018-01-03', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '2018-01-05', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '2018-01-10', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '2018-01-20', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      barData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      }
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
  .chart-info{
    margin:30px 20px 0px;
  }
  .el-table{
    text-align: center;
    margin:20px;
  }
}
</style>
