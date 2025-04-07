<template>
  <div>
    <Header page-title="Yeloo"/>

    <!-- About Start -->
    <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title position-relative pb-3 mb-5">
              <h1 class="mb-0">Yeloo <sup><i class="fa fa-wifi"></i></sup></h1>
            </div>

            <p class="mb-4">
              Besoin de plus d'information?</p>
            <a href="https://selfcare.yeloo.cd/app/login/" target="_blank" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Visiter yeloo <sup>.CD</sup></a>
          </div>
          <div class="col-lg-5" style="min-height: 500px;">
            <div class="position-relative h-100">
              <img class="img-fluid position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" :src="$resolvePath(yeloo.image)" style="  object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <Souscrire :tel="yeloo.telephone"/>
    <Footer/>
  </div>
</template>

<script>
import Souscrire from "@/sections/Souscrire.vue";
import YelooSection from "@/sections/Yeloo.vue";
export default {
  name: "Yeloo",
  components:{Souscrire,YelooSection},
  computed:{
    yeloo(){
      return this.$store.state.yeloo;
    }
  }
}
</script>

<style scoped>

</style>