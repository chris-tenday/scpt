<template>
  <!-- About Start -->
  <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-7">
          <div class="section-title position-relative pb-3 mb-5">
            <h1 class="mb-0">Découvrez notre service d'hébergement hosting <sup>.CD</sup></h1>
          </div>
          <p class="mb-4">
            {{hosting.texte}}
          </p>
          <div class="row g-0 mb-3">
            <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
              <h5 class="mb-3"><i class="fa fa-server text-primary me-3"></i>Offres revendeurs</h5>
              <h5 class="mb-3"><i class="fa fa-server text-primary me-3"></i>Hosting B2B</h5>
            </div>
            <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
              <h5 class="mb-3"><i class="fa fa-cloud text-primary me-3"></i>Web Cloud</h5>
              <h5 class="mb-3"><i class="fa fa-shopping-bag text-primary me-3"></i>Hébergements dédiés</h5>
            </div>
          </div>
          <a href="http://hosting.cd" target="_blank" class="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">Visiter hosting <sup>.CD</sup></a>
        </div>
        <div class="col-lg-5" style="min-height: 500px;">
          <div class="position-relative h-100">
            <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" :src="$resolvePath(hosting.image)" style="object-fit: cover;">
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- About End -->
</template>

<script>
export default {
  name: "HostingSection",
  computed:{
    hosting(){
      return this.$store.state.section_hosting;
    },

  }
}
</script>
