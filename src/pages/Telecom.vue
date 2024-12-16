<template>
  <div>
    <Header page-title="Télécommunication"/>

    <!-- About Start -->
    <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title position-relative pb-3 mb-5">
              <h1 class="mb-0">Télécommunications</h1>
            </div>
            <p class="mb-4">
              {{telecom.texte}}
            </p>
            <div class="row g-0 mb-3">
              <div class="section-title position-relative pb-3 mb-5">
                <h1 class="mb-0">Sur le plan national</h1>
              </div>
              <p class="mb-4">
                {{telecom.plan_national}}
              </p>
            </div>
          </div>
          <div class="col-lg-5" style="min-height: 500px;">
            <div class="position-relative h-100">
              <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" :src="$resolvePath(telecom.image_1)" style="object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title position-relative pb-3 mb-5">
              <h1 class="mb-0">Alimentation & Connectivité</h1>
            </div>
            <p class="mb-4">
              {{telecom.alimentation}}
            </p>
            <div class="row g-0 mb-3">
              <div class="section-title position-relative pb-3 mb-5">
                <h1 class="mb-0">Kinshasa</h1>
              </div>
              <p class="mb-4">
                {{telecom.kinshasa}}
              </p>
            </div>
          </div>
          <div class="col-lg-5" style="min-height: 500px;">
            <div class="position-relative h-100">
              <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" :src="$resolvePath(telecom.image_2)" style=" object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- services !-->
    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Nos services</h5>
          <h1 class="mb-0">Un service fiable et sécurisé</h1>
        </div>
        <div class="row g-5">
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-wifi text-white"></i>
              </div>
              <h4 class="mb-3">Adresse IP</h4>
              <p class="m-0">avec session BGP avec plus de deux (2) adresses IP</p>
              <a style="display: none;" class="btn btn-lg btn-primary rounded" href="">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-server text-white"></i>
              </div>
              <h4 class="mb-3">Hosting <sup>.cd</sup></h4>
              <p class="m-0">Hébergement des données entreprise, nom des domaines(.cd) et emails</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-wifi text-white"></i>
              </div>
              <h4 class="mb-3">Connectivité </h4>
              <p class="m-0">Transport Niveau 2 et 3</p>
              <div style="visibility: hidden;">
                <p class="m-0">Transport Niveau 2 et 3</p>
                <p class="m-0">Transport Niveau 2 et 3</p>
                <p class="m-0">Transport Niveau 2 et 3</p>
              </div>

            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-wifi text-white"></i>
              </div>
              <h4 class="mb-3">Netflix </h4>
              <p class="m-0">Access au cash Netflix</p>
              <div style="visibility: hidden;">
                <p class="m-0">Transport Niveau 2 et 3</p>
                <p class="m-0">Transport Niveau 2 et 3</p>
                <p class="m-0">Transport Niveau 2 et 3</p>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About End -->

    <Souscrire/>

    <Partners/>

    <Footer/>
  </div>
</template>

<script>
import Header from "@/sections/Header.vue";
import Footer from "@/sections/Footer.vue";
import Partners from "@/sections/Partners.vue";
import Souscrire from "@/sections/Souscrire.vue";
export default {
  name: "Telecom",
  components: {Partners, Footer, Header,Souscrire},
  computed:{
    telecom(){
      return this.$store.state.telecom;
    }
  }
}
</script>

<style scoped>

</style>