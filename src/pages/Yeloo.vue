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
            <p style="display: none;" class="mb-4">

              Yeloo est un produit de la SCPT axé dans la fourniture de la connexion internet avec et sans fil</p>
            <div style="display:none;" class="row g-0 mb-3">
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3"><i class="fa fa-wifi text-primary me-3"></i>Internet sans fil</h5>
              </div>
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3"><i class="fa fa-wifi text-primary me-3"></i>Internet avec fil</h5>
              </div>
            </div>
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