<template>
  <div id="team" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <!-- Team Start -->
    <section id="doctors" class="doctors section">

      <div class="container">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Equipe dirigeante</h5>
        </div>
        <div class="row gy-4">

          <div class="col-lg-4 col-md-6" >
            <div class="doctor-card">
              <div class="doctor-image">
                <img :src="$resolvePath(team.photo_pca)" alt="PCA" class="img-fluid">
                <div class="doctor-overlay">
                  <div class="social-links">
                    <a href="#"><i class="bi bi-linkedin"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div class="doctor-content">
                <h4>{{ team.pca }}</h4>
                <span class="specialty">Président du Conseil d'Administration</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" >
            <div class="doctor-card">
              <div class="doctor-image">
                <img :src="$resolvePath(team.photo_dg)" alt="PCA" class="img-fluid">
                <div class="doctor-overlay">
                  <div class="social-links">
                    <a href="#"><i class="bi bi-linkedin"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div class="doctor-content">
                <h4>{{ team.dg }}</h4>
                <span class="specialty">Directeur Général</span>
              </div>
            </div>
          </div>

          <div class="col-lg-4 col-md-6" >
            <div class="doctor-card">
              <div class="doctor-image">
                <img :src="$resolvePath(team.photo_dga)" alt="PCA" class="img-fluid">
                <div class="doctor-overlay">
                  <div class="social-links">
                    <a href="#"><i class="bi bi-linkedin"></i></a>
                    <a href="#"><i class="bi bi-twitter"></i></a>
                  </div>
                </div>
              </div>
              <div class="doctor-content">
                <h4>{{ team.dga }}</h4>
                <span class="specialty">Directeur Général Adjoint</span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </section>
    <!-- Team End -->
  </div>
</template>

<script>
export default {
  name: "Team",
  computed:{
    team(){
      return this.$store.state.section_team;
    }
  }
}
</script>

<style scoped>

</style>