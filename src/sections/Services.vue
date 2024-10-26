<template>
  <div>
    <!-- Service Start -->
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
                <i class="fa fa-truck text-white"></i>
              </div>
              <h4 class="mb-3">La Poste</h4>
              <p class="m-0">Acheminement du courrier et d’opérations financières</p>
              <a class="btn btn-lg btn-primary rounded" href="/laposte">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.6s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-wifi text-white"></i>
              </div>
              <h4 class="mb-3">ON <sup>by SCPT</sup></h4>
              <p class="m-0">Triple Play => Télévision numérique, Inernet haut débit, Téléphone fixe illimitée</p>
              <a class="btn btn-lg btn-primary rounded" href="#on">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-server text-white"></i>
              </div>
              <h4 class="mb-3">Hosting</h4>
              <p class="m-0">Hébergement des données entreprise, nom des domaines et emails</p>
              <a class="btn btn-lg btn-primary rounded" href="/laposte">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 wow zoomIn" data-wow-delay="0.9s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-shopping-bag text-white"></i>
              </div>
              <h4 class="mb-3">Poste Market</h4>
              <p class="m-0">Boutique en ligne avec plus de 400 articles disponible et livré par la Poste</p>
              <a class="btn btn-lg btn-primary rounded" href="/postemarket">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Service End -->
  </div>
</template>

<script>
export default {
  name: "Service"
}
</script>

<style scoped>

</style>