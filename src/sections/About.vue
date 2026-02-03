<template>
  <div>
    <section id="about" class="about section">
      <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container" >
          <div class="row align-items-center">
            <div class="col-lg-7">

              <div class="about-content">
                <h5 class="fw-bold text-primary text-uppercase">Qui sommes-nous ?</h5>
                <h3>L'Office Congolais des Postes et Télécommunications (OCPT)</h3>
                <p class="lead">{{sectionMission.texte}}.</p>

                <div class="stats-grid">
                  <div class="stat-item">
                  <span class="stat-number" data-purecounter-start="0" data-purecounter-end="15000"
                        data-purecounter-duration="2"><i class="fa fa-truck text-primary me-3"></i></span>
                    <span class="stat-label">La Poste</span>
                  </div>
                  <div class="stat-item">
                  <span class="stat-number" data-purecounter-start="0" data-purecounter-end="25"
                        data-purecounter-duration="2"><i class="fa fa-wifi text-primary me-3"></i></span>
                    <span class="stat-label">ON <sup>by OCPT</sup></span>
                  </div>
                  <div class="stat-item">
                  <span class="stat-number" data-purecounter-start="0" data-purecounter-end="50"
                        data-purecounter-duration="2"><i class="fa fa-truck text-primary me-3"></i></span>
                    <span class="stat-label">Hosting</span>
                  </div>
                </div><!-- End Stats Grid -->
              </div><!-- End About Content -->


            </div>

            <div class="col-lg-5" >
              <div class="image-wrapper">
                <img :src="$resolvePath(sectionMission.image)" class="img-fluid main-image" alt="Healthcare facility">
                <div class="floating-image" >
                  <img :src="$resolvePath('/assets/downloaded/logo_2.jpg')" class="img-fluid" alt="Medical team">
                </div>
              </div>
            </div>
          </div>

          <div class="values-section" >
            <div class="row">
              <div class="col-lg-12 text-center">
                <h3>Nos Objectifs</h3>
                <p class="section-description">Être le fer de lance du développement du secteur postal en Afrique. </p>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-lightbulb"></i>
                  </div>
                  <h4>Permettre</h4>
                  <p>Permettre au secteur postal de devenir une composante essentielle de l'économie numérique et de l'inclusion socio-économique .</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-lightbulb"></i>
                  </div>
                  <h4>Sensibiliser</h4>
                  <p>Sensibiliser les dirigeants africains à prioriser les projets du secteur postal dans les plans de développement nationaux.</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-lightbulb"></i>
                  </div>
                  <h4>Soutenir</h4>
                  <p>Soutenir le développement d'un « modèle de service universel » régional .</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-6" >
                <div class="value-item">
                  <div class="value-icon">
                    <i class="bi bi-lightbulb"></i>
                  </div>
                  <h4>Renforcer </h4>
                  <p>Renforcer la voix de l'Afrique dans les dialogues postaux mondiaux.</p>
                </div>
              </div>
            </div><!-- End Values Row -->
          </div>
        </div>
      </div>
    </section>

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