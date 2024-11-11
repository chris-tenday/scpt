<template>
  <!-- About Start -->
  <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-7">
          <div class="section-title position-relative pb-3 mb-5">
            <h1 class="mb-0">Yeloo <sup><i class="fa fa-wifi"></i></sup></h1>
          </div>
          <p class="mb-4">

            Yeloo est un produit de la SCPT axé dans la fourniture de la connexion internet avec et sans fil</p>
          <div class="row g-0 mb-3">
            <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 class="mb-3"><i class="fa fa-wifi text-primary me-3"></i>Internet sans fil</h5>
            </div>
            <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 class="mb-3"><i class="fa fa-wifi text-primary me-3"></i>Internet avec fil</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-5" style="min-height: 500px;">
          <div class="position-relative h-100">
            <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" :src="$resolvePath('/assets/downloaded/yeloo.jpg')" style="object-fit: cover;">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->
</template>

<script>
export default {
  name: "Yeloo"
}
</script>

<style scoped>

</style>