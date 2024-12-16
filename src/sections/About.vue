<template>
  <div>
    <!-- About Start -->
    <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title position-relative pb-3 mb-5">
              <h5 class="fw-bold text-primary text-uppercase">Qui sommes-nous ?</h5>
              <h1 class="mb-0">La Société Congolaise des Postes et Télécommunications (SCPT) </h1>
            </div>
            <p class="mb-4">
              {{sectionMission.texte}}

            </p>
            <div class="row g-0 mb-3">
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                <h5 class="mb-3"><i class="fa fa-truck text-primary me-3"></i>La Poste</h5>
                <h5 class="mb-3"><i class="fa fa-wifi text-primary me-3"></i>ON <sup>by SCPT</sup></h5>
              </div>
              <div class="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                <h5 class="mb-3"><i class="fa fa-server text-primary me-3"></i>Hosting</h5>
                <h5 class="mb-3"><i class="fa fa-shopping-bag text-primary me-3"></i>Poste Market</h5>
              </div>
            </div>
            <div class="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
              <div class="bg-primary d-flex align-items-center justify-content-center rounded" style="width: 60px; height: 60px;">
                <i class="bi bi-envelope-open text-white"></i>
              </div>
              <div class="ps-4">
                <h5 class="mb-2">{{sectionContact.email}}</h5>

              </div>
            </div>
          </div>
          <div class="col-lg-5" style="min-height: 500px;">
            <div class="position-relative h-100">
              <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" :src="$resolvePath(sectionMission.image)" style="object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
  </div>
</template>

<script>
export default {
  name: "About",
  computed:{
    sectionMission()
    {
      return this.$store.state.section_mission;
    },
    sectionContact()
    {
      return this.$store.state.section_contact;
    }
  }
}
</script>

<style scoped>

</style>