<template>
  <div class="container">
    <div>
      <img class="logoImgs" src="../static/logo.jpg" alt="lolol">
      <h1 class="title">
        nuxtAadminSystem
      </h1>
      <h2 class="subtitle">
        AdminSystem of use Nuxt!
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
      <div style="margin-top: 15px;">
        <el-input placeholder="请输入内容" v-model="userName">
          <el-button @click="blinkHome" slot="append">Go!</el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      userName:'',
    }
  },
  methods: {
    blinkHome(){
      this.$router.push({name:"home",query:{ userName: this.userName }});
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.logoImgs{
  border-radius:50%;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
