<template>
  <div>
    <RouterView/>
    <!--<TestPage/> !-->
  </div>
</template>
<script>
import Home from "@/pages/Home.vue";
import TestPage from "@/pages/TestPage.vue";
export default{
  components:{Home,TestPage},
  methods:{
    async configContent()
    {
      await this.$store.dispatch("getStaticContent");
      await this.$store.dispatch("getLaPosteContent");
      await this.$store.dispatch("getEmsContent");
      await this.$store.dispatch("getPosteMarketContent");
      await this.$store.dispatch("getOnContent");
      await this.$store.dispatch("getPostefinanceContent");
      await this.$store.dispatch("getTelecomContent");
      await this.$store.dispatch("getImmobilierContent");
      await this.$store.dispatch("getYelooContent");
    }
  },
  mounted() {
    this.configContent();
  }
}
</script>