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
                <button @click.prevent="offre = offres[0]" class="btn btn-info">Voir tarif <span class="fa fa-arrow-right"></span></button>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <h6>Chrono </h6>
                <button @click.prevent="offre = offres[1]" class="btn btn-info">Voir tarif <span class="fa fa-arrow-right"></span></button>
                <p style="display:none;" class="mb-0">Traite les objets des correspondances et les colis postaux ;</p>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <h6>Classique </h6>
                <button @click.prevent="offre = offres[2]" class="btn btn-info">Voir tarif <span class="fa fa-arrow-right"></span></button>
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
                <button @click.prevent="offre = offres[3]" class="btn btn-info">Voir tarif <span class="fa fa-arrow-right"></span></button>
                <p style="display:none;" class="mb-0">Traite les objets des correspondances et les colis postaux ;</p>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <h6>CPX International </h6>
                <button @click.prevent="offre = offres[4]" class="btn btn-info">Voir tarif <span class="fa fa-arrow-right"></span></button>
                <p style="display:none;" class="mb-0">Traite les objets des correspondances et les colis postaux ;</p>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <h6>Imprimés </h6>
                <button @click.prevent="offre = offres[5]" class="btn btn-info">Voir tarif <span class="fa fa-arrow-right"></span></button>
                <p style="display:none;" class="mb-0">Traite les objets des correspondances et les colis postaux ;</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- Features Start -->

    <!-- Service Start -->
    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h2 class="mb-0">La Poste RDC offre à la clientèle les produits suivants</h2>
        </div>
        <div class="row g-5">
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h4 class="mb-3">Les lettres ordinaires</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h4 class="mb-3">Les lettres recommandées</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h4 class="mb-3">Les cartes postales</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h4 class="mb-3">Les documents exprès</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h4 class="mb-3">Imprimés et écrits périodiques (livres, brochures, journaux)</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h4 class="mb-3">Les Petits paquets, les colis postaux et marchandises</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h4 class="mb-3">Les Boîtes Postales</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h4 class="mb-3">La Philatélie</h4>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-truck text-white"></i>
              </div>
              <h4 class="mb-3">La Poste relais</h4>
            </div>
          </div>



        </div>
      </div>
    </div>
    <!-- Service End -->

    <!-- About Start -->
    <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
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

    <div style="display: none;" class="container-fluid">
      <div class="row" style="display: flex; justify-content: center; ">
        <div class="col-md-8" style=" box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);">
          <div style="padding: 15px; display:flex; justify-content: center;  width:100%;">
            <img :src="$resolvePath('/assets/downloaded/poste-logo.png')" style=" width:100px; height:100px;" alt="">
          </div>
          <div>
            <h2 style="text-align: center;">Conseil d’administration</h2>
            <p>
              Le Conseil d’administration, ci-après dénommé « le Conseil », est composé de vingt-cinq (25) Etats membres, élus par la Conférence selon la répartition géographique adoptée par l’UA. Dans l’intervalle des sessions de la Conférence, le Conseil est l’organe de prise de décisions de l’Union, dans la limite des pouvoirs qui lui sont délégués par la Conférence. A la demande d’un ou de plusieurs Etats membres de l’Union, ou du Secrétaire général, et sous réserve de l’accord des deux tiers des Etats membres du Conseil d’administration, le Conseil se réunit en session extraordinaire.
            </p>
            <p>Le Conseil est responsable devant la Conférence. Le CA de l’UPAP réunit : </p>
            <ul class="list-unstyled">
              <li>* Les groupes de travaux;</li>
              <li>* Le forum</li>
              <li>* Les commissions : La commission Exploitation et Technologie, La commission Politique, Stratégie et Gouvernance et la commission Administration et Finance</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div style="display:none;" id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h2 class="mb-0">40ème Session ordinaire du Conseil d’administration à Kinshasa</h2>
        </div>
        <div class="row g-5">
          <div class="col-md-6">
            <p>
              Depuis le mardi 12 avril 2022, le Gouvernement de la République Démocratique du Congo et le Secrétariat général de l’Union Panafricaine des Postes UPAP avaient signé le mémorandum d’entente en vue de l’organisation du 4 au 14 juillet 2022 de la 40ème session ordinaire du Conseil d’administration de cette organisation postale panafricaine à Kinshasa. Ceci traduit la volonté du Gouvernement de la République Démocratique du Congo à faire du secteur de la Poste un véritable levier d’intégration et d’inclusion sociale.

              Le Ministre congolais des Postes, Télécommunications, Nouvelles technologies de l’Information et de la Communication (PTNTIC), Augustin KIBASSA, avait donc tenu à indiquer que la RDC s’est engagée dans une diplomatie postale en prenant en charge l’organisation du Conseil d’Administration de l’UPAP qui s’est déroulé en dates du 4 au 14 juillet 2022 à Kinshasa.
            </p>
          </div>
          <div class="col-md-6">
            <p>


              Il a fait savoir que la signature de ce mémorandum venait non seulement définir les rôles et les responsabilités de chaque partie prenante mais aussi concrétiser la détonation du Gouvernement de la RDC d’organiser ces assises à Kinshasa. Il a rajouté que de plus de 360 points de présence de la poste disséminés à travers la République Démocratique du Congo, c’est l’une des voies à la fois de remerciement et d’engagement pour les différents services d’envoi et de réception des courriers, répondant présent selon les missions de la communauté postale.

              La poste offre ainsi un outil d’intégration et d’inclusion sociale pour plus de 100 millions de congolais. Pour finir, Secrétaire général de l’UPAP a noté que la 40ème session du Conseil d’Administration de l’Union panafricaine des postes dispose d’un éventail riche et complet des thématiques sur les enjeux du secteur postal qui peut être bénéfique à la République Démocratique du Congo à l’ère de la relance du secteur de la poste longtemps oublié.

              La 40e session de l’UPAP s’était bien déroulé du 04 au 14 juillet 2022, elle a permis à la Poste RDC de s’affirmer et de revenir au concert des nations postales, gage d’une diplomatie postale réussie.

            </p>
          </div>



        </div>
      </div>
    </div>

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