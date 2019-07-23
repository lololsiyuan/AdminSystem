<template>
  <div class="page">
      <appHeader/>
      <main>
        <aside>
          <appNav/>
        </aside>
        <section>
          <nuxt/>
        </section>
      </main>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader';
import AppNav from '~/components/AppNav';
export default {
  components:{
    AppHeader,
    AppNav
  },
  mounted() {
    console.log(this.$route);
  },
  methods: {

  },
}
</script>

<style lang="scss">
html,body,.page,#__nuxt,#__layout{
  height:100%;
}
main{
  height: calc(100% - 61px);
  display: flex;
  aside{
    width:200px;
    height:100%;
    border-right: solid 1px #e6e6e6;
    // background: linear-gradient( 135deg, #FFD26F 10%, #3677FF 100%);
  }
  section{
    width: calc(100% - 200px);
    padding:20px;
  }
}
</style>
