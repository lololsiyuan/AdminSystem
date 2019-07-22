<template>
  <div class="home">

  </div>
</template>

<script>

export default {
  layout:'page',
  mounted() {
    this.userName = this.$route.query.userName;
    const succeIfo = this.userName+'，欢迎您！';
    console.log(succeIfo,this.$route);
    this.$message({
      message: succeIfo,
      type: 'success'
    });
  },
  methods: {

  },
}
</script>

<style>
</style>
