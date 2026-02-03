<template>
  <div>
    <Header page-title="La Poste"/>

    <!-- Features Start -->

    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary ">Pourquoi nous choisir?</h5>
          <h4 class="mb-0">{{laposte.pourquoi}}</h4>
        </div>
        <div class="row g-5">
          <div class="col-lg-2">
            <div class="row g-5">
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <h6>Poste au lettre </h6>
                <button @click.prevent="offre = offres[0]" class="btn btn-dark w-100 py-3">Voir tarif <span class="fa fa-arrow-right"></span></button>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <h6>Chrono </h6>
                <button @click.prevent="offre = offres[1]" class="btn btn-dark w-100 py-3">Voir tarif <span class="fa fa-arrow-right"></span></button>
                <p style="display:none;" class="mb-0">Traite les objets des correspondances et les colis postaux ;</p>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <h6>Classique </h6>
                <button @click.prevent="offre = offres[2]" class="btn btn-dark w-100 py-3">Voir tarif <span class="fa fa-arrow-right"></span></button>
                <p style="display:none;" class="mb-0">Traite les objets des correspondances et les colis postaux ;</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8  wow zoomIn" data-wow-delay="0.9s" style="">
            <div class="position-relative pb-2" style="overflow-x: auto; overflow-y: auto;  white-space: nowrap; height:440px; ">
              <img class="position-absolute  rounded wow zoomIn" data-wow-delay="0.1s" :src="$resolvePath(offre.img)" style="border:1px solid lightgray;">
            </div>
          </div>
          <div class="col-lg-2">
            <div class="row g-5">
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <h6>Confiance </h6>
                <button @click.prevent="offre = offres[3]" class="btn btn-dark w-100 py-3">Voir tarif <span class="fa fa-arrow-right"></span></button>
                <p style="display:none;" class="mb-0">Traite les objets des correspondances et les colis postaux ;</p>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <h6>CPX International </h6>
                <button @click.prevent="offre = offres[4]" class="btn btn-dark w-100 py-3">Voir tarif <span class="fa fa-arrow-right"></span></button>
                <p style="display:none;" class="mb-0">Traite les objets des correspondances et les colis postaux ;</p>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <h6>Imprimés </h6>
                <button @click.prevent="offre = offres[5]" class="btn btn-dark w-100 py-3">Voir tarif <span class="fa fa-arrow-right"></span></button>
                <p style="display:none;" class="mb-0">Traite les objets des correspondances et les colis postaux ;</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- Features Start -->

    <section id="about" class="about section" >
      <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container" >
          <div class="values-section" >
            <div class="row">
              <div class="col-lg-12 text-center">
                <h3>Produits</h3>
                <p class="section-description">La Poste RDC offre à la clientèle les produits suivants. </p>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-truck"></i>
                  </div>
                  <h4>Lettres ordinaires</h4>
                </div>
              </div>

              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-truck"></i>
                  </div>
                  <h4>Lettres recommandées</h4>
                </div>
              </div>

              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-truck"></i>
                  </div>
                  <h4>Cartes postales</h4>
                </div>
              </div>

              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-truck"></i>
                  </div>
                  <h4>Documents exprès</h4>
                </div>
              </div>

              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-truck"></i>
                  </div>
                  <h4>Imprimés et écrits périodiques</h4>
                </div>
              </div>

              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-truck"></i>
                  </div>
                  <h4>Petits paquets, colis postaux et marchandises</h4>
                </div>
              </div>

              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-truck"></i>
                  </div>
                  <h4>Boîtes Postales</h4>
                </div>
              </div>

              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-truck"></i>
                  </div>
                  <h4>Philatélie & Poste relais</h4>
                </div>
              </div>

            </div><!-- End Values Row -->
          </div>
        </div>
      </div>
    </section>
    <!-- About Start -->
    <div  id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title position-relative pb-3 mb-5">
              <h1 class="mb-0">Notre Mission</h1>
            </div>
            <p class="mb-4">
              {{laposte.mission}}}</p>
            <div class="row g-0 mb-3">
              <div class="section-title position-relative pb-3 mb-5">
                <h1 class="mb-0">Nos Objectifs</h1>
              </div>
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3"><i class="fa fa-question text-primary me-3"></i>Renforcer la voix de l'Afrique</h5>
                <h5 class="mb-3"><i class="fa fa-question text-primary me-3"></i>Secteur Postal</h5>
              </div>
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3"><i class="fa fa-question text-primary me-3"></i>Sensibiliser</h5>
                <h5 class="mb-3"><i class="fa fa-question text-primary me-3"></i>Soutenir le développement</h5>
              </div>
            </div>
            <div class="row g-0 mb-3">
              <div class="section-title position-relative pb-3 mb-5">
                <h1 class="mb-0">Codes postaux</h1>
              </div>
              <p class="mb-4">
                Ledit annuaire du code postal vous permet d’identifier les codes des adresses postales (quartiers, communes, secteurs, chefferies et bureaux des Postes) des provinces et villes.
              </p>
              <a href="https://www.codepostal.cd/" target="_blank" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Codes postaux de la RDC</a>

            </div>
          </div>
          <div class="col-lg-5" style="min-height: 500px;">
            <div class="position-relative h-100">
              <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" :src="$resolvePath(laposte.image)" style="object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->

    <Souscrire :tel="laposte.telephone"/>

    <Partners/>

    <Footer/>
  </div>
</template>

<script>
import Partners from "@/sections/Partners.vue";
import Souscrire from "@/sections/Souscrire.vue";
export default {
  name: "LaPoste",
  components: {Partners,Souscrire},
  data(){
    return {
      offres:[
        {
          titre:"Poste au lettre",
          img:"/assets/downloaded/pp.png"
        },
        {
          titre:"Chrono",
          img:"/assets/downloaded/chrono.png"
        },
        {
          titre:"Classique",
          img:"/assets/downloaded/classique.png"
        },
        {
          titre:"Confiance",
          img:"/assets/downloaded/confiance.png"
        },
        {
          titre:"CPX International",
          img:"/assets/downloaded/cpx.png"
        },
        {
          titre:"Imprimes",
          img:"/assets/downloaded/imp.png"
        },
        
      ],
      offre:{}
    };
  },
  computed:{
    laposte(){
      return this.$store.state.laposte
    }
  },
  mounted(){
    this.offre = this.offres[0];
    console.log("mounted");
    console.log(this.offre.titre);
  }
}
</script>

<style scoped>

</style>