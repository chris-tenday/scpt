<template>
  <div>
    <!-- Quote Start -->
    <div id="souscrire" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title position-relative pb-3 mb-5">
              <h5 class="fw-bold text-primary text-uppercase">Bésoin d'un service?</h5>
              <h1 class="mb-0">Entrer en contact avec notre personnel</h1>
            </div>
            <div style="display:none;" class="row gx-3">
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-4"><i class="fa fa-reply text-primary me-3"></i>Reply within 24 hours</h5>
              </div>
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-4"><i class="fa fa-phone-alt text-primary me-3"></i>24 hrs telephone support</h5>
              </div>
            </div>
            <p class="mb-4">La SCPT a un rôle très fondamental, c’est ce lui de servir d’intermédiaire entre les hommes à traves le pays et le monde, par ses prestations nombreuses et variées au service du public.</p>
            <div class="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
              <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
                <i class="bi bi-envelope-open text-white"></i>
              </div>
              <div class="ps-4">
                <h5 class="mb-2">info@scpt.cd</h5>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
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
                  <div class="col-12" style="display: none;">
                    <select class="form-select bg-light border-0" style="height: 55px;">
                      <option selected>Choisissez le Service</option>
                      <option value="1">La Poste</option>
                      <option value="2">ON</option>
                      <option value="3">Poste Market</option>
                      <option value="">Hosting</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <textarea class="form-control bg-light border-0" rows="3" placeholder="Décrivez votre bésoin.."></textarea>
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
    <!-- Quote End -->
  </div>
</template>

<script>
export default {
  name: "Souscrire"
}
</script>

<style scoped>

</style>