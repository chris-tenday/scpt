<template>
  <div>
    <Header page-title="Hosting et Hebergement"/>

    <HostingSection/>

    <Souscrire/>

    <Partners/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/sections/Header.vue";
import HostingSection from "@/sections/HostingSection.vue";
import Souscrire from "@/sections/Souscrire.vue";
import Partners from "@/sections/Partners.vue";

export default {
  name: "Hosting" ,
  components: {Partners, Souscrire, Header,HostingSection}
}
</script>

<style scoped>

</style>