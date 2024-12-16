<template>
  <div>
    <!-- Pricing Plan Start -->
    <div id="on" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <img :src="$resolvePath('/assets/downloaded/onbox2.png')" style="width:120px;" alt="">
          <h5 style="display:none;" class="fw-bold text-primary text-uppercase">Pricing Plans</h5>
          <h1 class="mb-0">Nos offres ON <sup>by SCPT</sup></h1>
          <p>Profitez d’un accès illimité grâce à l’internet haut débit sur Fibre optique. Détendez-vous avec des saisons complètes de programmes originaux exclusifs sur vos chaînes TV préférées. Profitez d’une Téléphonie illimitée pour contacter tous vos proches.</p>
          <ul class="list-unstyled">
            <li><span class="fa fa-check"></span> Frais d’installation :  <span style="font-weight:bold;">{{ on.installation }}</span></li>
            <li><span class="fa fa-check"></span> Kit Matériel : <span style="font-weight:bold;">{{ on.kit }}</span></li>
          </ul>
        </div>
        <div class="row g-0">
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div class="bg-light rounded">
              <div class="border-bottom py-4 px-5 mb-4">
                <h4 class="text-primary mb-1">« ON CLASSIQUE »</h4>
                <small class="text-uppercase">Abonnement basique</small>
              </div>
              <div class="p-5 pt-0">
                <h1 class="display-5 mb-3">
                  <small class="align-top" style="font-size: 22px; line-height: 45px;">{{on.classique_prix}}</small>
                </h1>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-wifi"></span> Internet haut débit illimité 50Mbit/s</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-phone"></span> Téléphonie locale illimitée</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-tv"></span> Bouquet basique</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-2"><span><span class="fa fa-info-circle"></span> Note: <br></span></div>
                <a style="display: none;" href="" class="btn btn-primary py-2 px-4 mt-4">Choisir l'offre <span class="fa fa-plus-circle"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div class="bg-white rounded shadow position-relative" style="z-index: 1;">
              <div class="border-bottom py-4 px-5 mb-4">
                <h4 class="text-primary mb-1">« ON ÉVOLUTION »</h4>
                <small class="text-uppercase">Abonnement familliale</small>
              </div>
              <div class="p-5 pt-0">
                <h1 class="display-5 mb-3">
                  <small class="align-top" style="font-size: 22px; line-height: 45px;">{{on.evolution_prix}}</small>
                </h1>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-wifi"></span> Internet haut débit illimité 100Mbit/s</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-phone"></span> Téléphonie locale illimitée</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-tv"></span> Bouquet familliale </span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-2"><span><span class="fa fa-info-circle"></span> Note: <br></span></div>
                <a style="display: none;" href="" class="btn btn-primary py-2 px-4 mt-4">Choisir l'offre <span class="fa fa-plus-circle"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div class="bg-white rounded shadow position-relative" style="z-index: 1;">
              <div class="border-bottom py-4 px-5 mb-4">
                <h4 class="text-primary mb-1">« ON MAXI »</h4>
                <small class="text-uppercase">Abonnement haut de gamme</small>
              </div>
              <div class="p-5 pt-0">
                <h1 class="display-5 mb-3">
                  <small class="align-top" style="font-size: 22px; line-height: 45px;">{{on.maxi_prix}}</small>
                </h1>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-wifi"></span> Internet haut débit illimité 100Mbit/s</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-phone"></span> Téléphonie locale illimitée</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-tv"></span> Bouquet familliale </span><i class="fa fa-times text-danger pt-1"></i></div>
                <div class="d-flex justify-content-between mb-2"><span><span class="fa fa-info-circle"></span> Note: <br></span></div>
                <a style="display: none;" href="" class="btn btn-primary py-2 px-4 mt-4">Choisir l'offre <span class="fa fa-plus-circle"></span></a>
              </div>
            </div>
          </div>
        </div>
        <div style="padding-top: 10px;" class="row g-0">
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
            <div class="bg-light rounded">
              <div class="border-bottom py-4 px-5 mb-4">
                <h4 class="text-primary mb-1">« ON BUSINESS »</h4>
                <small class="text-uppercase">Abonnement VIP</small>
              </div>
              <div class="p-5 pt-0">
                <h1 class="display-5 mb-3">
                  <small class="align-top" style="font-size: 22px; line-height: 45px;">{{on.business_prix}}</small>
                </h1>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-wifi"></span> Internet haut débit illimité 200Mbit/s</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-phone"></span> Téléphonie illimitée</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-tv"></span> Bouquet VIP</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-2"><span><span class="fa fa-info-circle"></span> Note: <br></span></div>
                <a style="display: none;" href="" class="btn btn-primary py-2 px-4 mt-4">Choisir l'offre <span class="fa fa-plus-circle"></span></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
            <div class="bg-white rounded shadow position-relative" style="z-index: 1;">
              <div class="border-bottom py-4 px-5 mb-4">
                <h4 class="text-primary mb-1">« ON Entreprise B2B »</h4>
                <small class="text-uppercase">Abonnement entreprise toutes tailles, à la demande et au choix</small>
              </div>
              <div class="p-5 pt-0">
                <h1 class="display-5 mb-3">
                  <small class="align-top" style="font-size: 22px; line-height: 45px;">{{on.entreprise_prix}}</small>
                </h1>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-wifi"></span> Internet dédié </span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-phone"></span> Téléphonie : IP PABX Virtuel</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span><span class="fa fa-tv"></span> TV : la télédistribution </span><i class="fa fa-times text-danger pt-1"></i></div>
                <div class="d-flex justify-content-between mb-2"><span><span class="fa fa-info-circle"></span> Note: <br></span></div>
                <a style="display: none;" href="" class="btn btn-primary py-2 px-4 mt-4">Choisir l'offre <span class="fa fa-plus-circle"></span></a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- Pricing Plan End -->
  </div>
</template>

<script>
export default {
  name: "OffresON",
  computed:{
    on(){
      return this.$store.state.on;
    }
  }
}
</script>

<style scoped>

</style>