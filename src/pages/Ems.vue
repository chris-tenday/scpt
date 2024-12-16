<template>
  <div>
    <Header page-title="Express Mail Service"/>

    <!-- Features Start -->
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h2 class="mb-0">Express Mail Service</h2>
          <p>{{ems.texte}}</p>
        </div>
        <div class="row g-5">
          <div class="col-lg-4">
            <div class="row g-5">
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                  <i class="fa fa-truck text-white"></i>
                </div>
                <h4>EMS</h4>
                <p class="mb-0">Plus grand réseau de livraison au monde et les opérateurs postaux EMS ont la plus grande couverture du dernier kilomètre au monde, soutenue par le réseau de livraison postale pour atteindre toutes les entreprises et tous les citoyens du monde.</p>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                  <i class="fa fa-truck text-white"></i>
                </div>
                <h4>Pratique</h4>
                <p class="mb-0">Le réseau EMS dispose du plus grand nombre d’accès aux clients au monde basé sur les comptoirs postaux. En RDC, EMS se trouve dans tous les bureaux de poste à travers le pays. Nous envoyons et distribuons : les documents et marchandises, le courrier d’entreprise, les objets d’art…..</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style="min-height: 350px;">
            <div class="position-relative h-100">
              <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" :src="$resolvePath(ems.logo)" style=" object-fit: contain;">
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row g-5">
              <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                  <i class="fa fa-truck text-white"></i>
                </div>
                <h4>Caractéristiques</h4>
                <p class="mb-0">Outre sa rapidité, les caractéristiques essentielles de l’EMS sont la fiabilité, la sécurité, la traçabilité (localisation des envois par internet), la visibilité, l’attention portée au client et un bon rapport qualité-prix.</p>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                  <i class="fa fa-truck text-white"></i>
                </div>
                <h4>Professionalisme</h4>
                <p class="mb-0">Un équipe très expérimentée et professionelle</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- Features Start -->

    <!-- services !-->
    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h1 class="mb-0">Express Mail Service</h1>
          <p>{{ems.definition}}</p>
        </div>
        <div class="row g-5">
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-check text-white"></i>
              </div>
              <h4 class="mb-3">Fiabilité</h4>
              <p class="m-0">Les envois EMS ont la priorité à toutes les étapes du transport et du traitement.</p>
              <a style="display: none;" class="btn btn-lg btn-primary rounded" href="">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-check text-white"></i>
              </div>
              <h4 class="mb-3">Sécurité</h4>
              <p class="m-0">Un service de tracking est disponible à travers le WEB pour retracer en tout temps le parcours des envois.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-check text-white"></i>
              </div>
              <h4 class="mb-3">Economique </h4>
              <p class="m-0">La facturation est simple et claire en fonction uniquement du poids et de la destination.</p>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-check text-white"></i>
              </div>
              <h4 class="mb-3">Visibilité et écoute du client </h4>
              <p class="m-0">Fourniture aux partenaires des informations précises et de qualité </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Souscrire :tel="ems.telephone"/>

    <Partners/>
    <Footer/>
  </div>

</template>

<script>
import Header from "@/sections/Header.vue";
import Partners from "@/sections/Partners.vue";
import Footer from "@/sections/Footer.vue";
import Souscrire from "@/sections/Souscrire.vue";
export default {
  name: "Ems",
  components: {Souscrire, Footer, Partners, Header},
  computed:{
    ems(){
      return this.$store.state.ems;
    }
  }
}
</script>

<style scoped>

</style>