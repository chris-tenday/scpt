<template>
  <div>
    <Header page-title="Immobilier"/>

    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h1 class="mb-0">Bureau Immobilier</h1>
          <p>{{immobilier.texte}}</p>
        </div>
        <div class="row g-5">
          <div class="col-md-12">
            <img :src="$resolvePath(immobilier.image)" style="width:100%; max-height:350px;" alt="">
          </div>
        </div>
      </div>
    </div>

    <Souscrire :tel="immobilier.telephone"/>
    <Footer/>
  </div>
</template>

<script>
import Souscrire from "@/sections/Souscrire.vue";
import Footer from "@/sections/Footer.vue";
export default {
  name: "Immobilier",
  components: {Footer, Souscrire},
  computed:{
    immobilier(){
      return this.$store.state.immobilier;
    }
  }
}
</script>

<style scoped>

</style>