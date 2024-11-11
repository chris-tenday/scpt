<template>
  <div>
    <Header page-title="Yeloo"/>

    <YelooSection/>

    <Souscrire tel="+243 895 354 283"/>
    <Footer/>
  </div>
</template>

<script>
import Souscrire from "@/sections/Souscrire.vue";
import YelooSection from "@/sections/Yeloo.vue";
export default {
  name: "Yeloo",
  components:{Souscrire,YelooSection}
}
</script>

<style scoped>

</style>