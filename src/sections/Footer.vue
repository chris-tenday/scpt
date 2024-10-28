<template>
  <div>
    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
        <div class="row gx-5">
          <div class="col-lg-4 col-md-6 footer-about">
            <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
              <a href="index.html" class="navbar-brand">
                <h1 class="m-0 text-white">SCPT - RDC</h1>
              </a>
            </div>
          </div>
          <div class="col-lg-8 col-md-6">
            <div class="row gx-5">
              <div class="col-lg-4 col-md-12 pt-5 mb-5">
                <div class="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 class="text-light mb-0">Nos addresses</h3>
                </div>
                <div class="d-flex mb-2">
                  <i class="bi bi-geo-alt text-primary me-2"></i>
                  <p class="mb-0">Boulevard du 30 juin, Kinshsa - Gombe</p>
                </div>
                <div class="d-flex mb-2">
                  <i class="bi bi-envelope-open text-primary me-2"></i>
                  <p class="mb-0">contact@scpt.cd</p>
                </div>
                <div class="d-flex mt-4">
                  <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                  <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                  <a class="btn btn-primary btn-square me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                </div>
              </div>
              <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
                <div class="section-title section-title-sm position-relative pb-3 mb-4">
                  <h3 class="text-light mb-0">Liens rapides</h3>
                </div>
                <div class="link-animated d-flex flex-column justify-content-start">
                  <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Accueil</a>
                  <a style="display: none;" class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Services</a>
                  <a style="display: none;" class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Articles</a>
                  <a style="display: none;" class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-fluid text-white" style="background: #061429;">
      <div class="container text-center">
        <div class="row justify-content-end">
          <div class="col-lg-8 col-md-6">
            <div class="d-flex align-items-center justify-content-center" style="height: 75px;">

            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->

    <!-- Back to Top -->
    <a id="backToTop" href="/#" class="btn btn-lg btn-warning btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a>
  </div>
</template>

<script>
export default {
  name: "Footer",
  mounted() {
    //document.getElementById("backToTop").click();
  }
}
</script>

<style scoped>

</style>