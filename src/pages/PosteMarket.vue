<template>
  <div>
    <Header page-title="Poste Market"/>

    <!-- About Start -->
    <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <section id="service-details-2" class="service-details-2 section">

          <div class="container" >
            <div class="row gy-4 align-items-center">

              <div class="col-lg-7" >
                <div class="service-details">

                  <div class="detail-item">
                    <div class="icon-wrapper">
                      <i class="bi bi-question-circle"></i>
                    </div>
                    <div class="content">
                      <h4>Pourquoi Poste Market ?</h4>
                      <p>{{postemarket.pourquoi}}</p>
                    </div>
                  </div>

                  <div class="detail-item">
                    <div class="icon-wrapper">
                      <i class="bi bi-info-circle"></i>
                    </div>
                    <div class="content">
                      <h4>Poste Market vous offre</h4>
                      <p>{{postemarket.offre}}</p>
                    </div>
                  </div>

                </div>
              </div>

              <div class="col-lg-5" >
                <div class="service-visual">
                  <img :src="$resolvePath(postemarket.image)" alt="" class="img-fluid">
                  <div class="visual-overlay">
                    <div class="stats-card">
                      <div class="stat">
                        <span class="number">100%</span>
                        <span class="label"><i class="bi bi-check"></i> Fiable</span>
                      </div>
                      <div class="stat">
                        <span class="number">24h/7</span>
                        <span class="label"><i class="bi bi-clock"></i> Disponible</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </div>
    <!-- About End -->

    <!-- Service Start -->
    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h5 class="mb-3">Livraison gratuite à partir de 100$</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-thumbs-up text-white"></i>
              </div>
              <h5 class="mb-3">99% Avis Positifs</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h5 class="mb-3">Livraison sécurisée</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-lock text-white"></i>
              </div>
              <h5 class="mb-3">Paiement Sécurisé</h5>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-shopping-cart text-white"></i>
              </div>
              <h5 class="mb-3">Uniquement Les meilleurs marques</h5>
            </div>
          </div>
          <div class="col-md-9" style="background-image: url('assets/downloaded/marketbottom.png'); background-size: cover; display:flex; justify-content: center;">
            <a href="https://postemarket.cd" target="_blank" class="btn btn-warning" style="color:white; height:50px; margin:auto;"><span class="fa fa-shopping-cart"></span> Visiter la boutique</a>
          </div>

        </div>
      </div>
    </div>
    <!-- Service End -->

    <Souscrire/>

    <Partners/>
    <Footer/>
  </div>
</template>

<script>
import Partners from "@/sections/Partners.vue";
import Souscrire from "@/sections/Souscrire.vue";
export default {
  name: "PosteMarket",
  components: {Souscrire,Partners},
  computed:{
    postemarket(){
      return this.$store.state.postemarket;
    }
  }
}
</script>

<style scoped>

</style>