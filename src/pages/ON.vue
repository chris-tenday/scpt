<template>
  <div>
    <Header page-title="« ON » C'est la Triple Play"/>

    <!-- About Start -->
    <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title position-relative pb-3 mb-5">
              <h5 style="display: none;" class="fw-bold text-primary text-uppercase">Qui sommes-nous ?</h5>
              <h1 class="mb-0">Pourquoi choisir ON.CD ?</h1>
            </div>
            <p class="mb-4">

              « ON by SCPT » c’est la Triple Play, un service grâce auquel les abonnés peuvent bénéficier à la fois d’un accès à l’Internet haut débit, à la téléphonie fixe illimitée et à la télévision numérique, fournis d’au moyen d’un seul et unique « box ».

              En plus d’une utilisation simplifiée, les offres Triple Play de « ON by SCPT » permettent aux abonnés de profiter de coûts réduits car l’ensemble de leurs services numériques seront gérés par une seule société la SCPT ; pas besoin de souscrire à plusieurs contrats auprès de fournisseurs différents.
            </p>
            <div class="section-title position-relative pb-3 mb-5">
              <h5 style="display: none;" class="fw-bold text-primary text-uppercase">Qui sommes-nous ?</h5>
              <h1 class="mb-0">Débit Internet</h1>
            </div>
            <p class="mb-4">
              Avec un débit internet excédant les 100mbps ,le service est conçu pour répondre aux besoins des consommateurs en contenu en ligne, à travers un forfait unique : à la maison, au bureau, à l’université.
            </p>
            <div class="row g-0 mb-3">
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3"><i class="fa fa-tv text-primary me-3"></i>Chaînes numériques</h5>
                <p>Plus de 50 chaînes nationales et internationales</p>
                <h5 class="mb-3"><i class="fa fa-wifi text-primary me-3"></i>Zero frais d’installation</h5>
                <p>Totalement offerte </p>
              </div>
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3"><i class="fa fa-wifi text-primary me-3"></i>Connexion rapide</h5>
                <p>La plus rapide en RDC. <span style="visibility: hidden;">dddddddddddddddddddddddddd</span></p>
                <h5 class="mb-3"><i class="fa fa-check text-primary me-3"></i>Meilleurs
                  plans tarifaires</h5>
                <p>Des prix hors concurrences </p>
              </div>
            </div>
          </div>
          <div class="col-lg-5" style="min-height: 500px;">
            <div class="position-relative h-100">
              <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" :src="$resolvePath('/assets/downloaded/on-cover.png')" style="object-fit: contain;">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <OffresON/>

    <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <img :src="$resolvePath('/assets/downloaded/on-logo.png')" style="width:120px;" alt="">
          <h5 style="display:none;" class="fw-bold text-primary text-uppercase">Pricing Plans</h5>
          <h1 class="mb-0">Ennregistrez-vous</h1>
          <p><i class="bi bi-telephone"></i> +243 895 354 283</p>
        </div>
        <div class="row g-5" style="display:flex; justify-content: center;">
          <div class="col-lg-6">
            <div class="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
              <form>
                <div class="row g-3">
                  <div class="col-xl-12">
                    <input type="text" class="form-control bg-light border-0" placeholder="Prenom" style="height: 55px;">
                  </div>
                  <div class="col-xl-12">
                    <input type="text" class="form-control bg-light border-0" placeholder="Nom " style="height: 55px;">
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control bg-light border-0" placeholder="Téléphone" style="height: 55px;">
                  </div>
                  <div class="col-12">
                    <input type="email" class="form-control bg-light border-0" placeholder="Email" style="height: 55px;">
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control bg-light border-0" placeholder="Adresse " style="height: 55px;">
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control bg-light border-0" placeholder="Ville" style="height: 55px;">
                  </div>
                  <div class="col-12">
                    <button class="btn btn-dark w-100 py-3" type="submit">Envoyer</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Partners/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/sections/Header.vue";
import Footer from "@/sections/Footer.vue";
import Partners from "@/sections/Partners.vue";
import OffresON from "@/sections/OffresON.vue";
export default {
  name: "ON",
  components: {OffresON, Partners, Footer, Header}
}
</script>

<style scoped>

</style>