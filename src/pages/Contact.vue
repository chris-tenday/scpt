<template>
  <div>
    <Header page-title="Nous contacter"/>

    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h1 class="mb-0">Laissez-nous un message</h1>
        </div>
        <div class="row d-flex justify-content-center">
          <div class="col-lg-6">
            <div class="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
              <form>
                <div class="row g-3">
                  <div class="col-xl-12">
                    <input type="text" class="form-control bg-light border-0" placeholder="Nom complet" style="height: 55px;">
                  </div>
                  <div class="col-12">
                    <input type="text" class="form-control bg-light border-0" placeholder="Téléphone" style="height: 55px;">
                  </div>
                  <div class="col-12">
                    <input type="email" class="form-control bg-light border-0" placeholder="Email" style="height: 55px;">
                  </div>
                  <div class="col-12">
                    <textarea class="form-control bg-light border-0" rows="3" placeholder="Ecrivez votre message.."></textarea>
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

    <!-- services !-->
    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h1 class="mb-0">Nos coordonnées</h1>
        </div>
        <div class="row g-5">
          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-map text-white"></i>
              </div>
              <h4 class="mb-3">Adresse</h4>
              <p class="m-0">1009, Boulevard du 30 Juin, Kinshasa – Gombe</p>
              <a style="display: none;" class="btn btn-lg btn-primary rounded" href="">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="fa fa-phone text-white"></i>
              </div>
              <h4 class="mb-3">+243 814 757 008</h4>
              <p class="m-0">Appelez-nous pour
                parler à un membre de
                notre équipe.</p>
              <a style="display: none;" class="btn btn-lg btn-primary rounded" href="">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
            <div class="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
              <div class="service-icon">
                <i class="bi bi-envelope text-white"></i>
              </div>
              <h4 class="mb-3">info@scpt.cd</h4>
              <p class="m-0">Envoyez-nous un e-mail pour obtenir de l’aide concernant un produit ou un service de la SCPT</p>
              <a style="display: none;" class="btn btn-lg btn-primary rounded" href="">
                <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from "@/sections/Header.vue";
export default {
  name: "Contact",
  components: {Header}
}
</script>

<style scoped>

</style>