<template>
  <div>
    <Header page-title="Immobilier"/>

    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h1 class="mb-0">Bureau Immobilier</h1>
          <p>La Direction de la gestion immobilière de la Société Congolaise des Postes et
            Télécommunications (SCPT) assure la gestion et la sauvegarde du patrimoine
            immobilier et foncier de la SCPT sur toute l’étendue du territoire national de la RDC ;
            elle s’emploie à la location des locaux, espaces de terre des sites. </p>
        </div>
        <div class="row g-5">
          <div class="col-md-12">
            <img :src="$resolvePath('/assets/downloaded/immo.jpg')" style="width:100%; max-height:350px;" alt="">
          </div>
        </div>
      </div>
    </div>

    <Souscrire tel="+243 810 520 121"/>
    <Footer/>
  </div>
</template>

<script>
import Souscrire from "@/sections/Souscrire.vue";
import Footer from "@/sections/Footer.vue";
export default {
  name: "Immobilier",
  components: {Footer, Souscrire}
}
</script>

<style scoped>

</style>