<template>
  <div>
    <!-- Topbar Start -->
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
      <div class="row gx-0">
        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div class="d-inline-flex align-items-center" style="height: 45px;">
            <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>Boulevard du 30 juin , Kinshasa - Gombe</small>
            <small class="text-light"><i class="fa fa-envelope-open me-2"></i>contact@scpt.cd</small>
          </div>
        </div>
        <div class="col-lg-4 text-center text-lg-end">
          <div class="d-inline-flex align-items-center" style="height: 45px;">
            <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-twitter fw-normal"></i></a>
            <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-facebook-f fw-normal"></i></a>
            <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href=""><i class="fab fa-linkedin-in fw-normal"></i></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar & Carousel Start -->
    <div class="container-fluid position-relative p-0">
      <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <a href="/" class="navbar-brand p-0">
          <h1 style="display: none;" class="m-0"><i class="fa fa-user-tie me-2"></i>SCPT</h1>
          <img src="/assets/downloaded/logo.png" style="width:70px; height:70px;" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0">
            <a href="index.html" class="nav-item nav-link active" ><i class="fa fa-home"></i> Accueil</a>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
              <div class="dropdown-menu m-0">
                <a href="/laposte" class="dropdown-item">La Poste</a>
                <a href="#" class="dropdown-item">EMS</a>
                <a href="#" class="dropdown-item">Poste Market</a>
                <a href="/on" class="dropdown-item">ON.CD</a>
                <a href="/postefinance" class="dropdown-item">Poste Finance</a>
                <a href="/telecom" class="dropdown-item">Télécommunication</a>
              </div>
            </div>
            <a href="#blog" class="nav-item nav-link">Articles</a>
            <div style="display: none;"  class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div class="dropdown-menu m-0">
                <a href="price.html" class="dropdown-item">Pricing Plan</a>
                <a href="feature.html" class="dropdown-item">Our features</a>
                <a href="team.html" class="dropdown-item">Team Members</a>
                <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                <a href="quote.html" class="dropdown-item">Free Quote</a>
              </div>
            </div>
            <a href="#souscrire" class="nav-item nav-link">Contact</a>
          </div>
          <button style="visibility: hidden;"  type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
          <a style="visibility: hidden;" href="#" class="btn btn-primary py-2 px-4 ms-3"></a>
        </div>
      </nav>

      <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="w-100" src="/assets/downloaded/banner1.png" style="min-height:500px;" alt="Image">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div class="p-3" style="max-width: 900px;">
                <h5 class="text-white text-uppercase mb-3 animated slideInDown">« POSTMARKET <sup>BY SCPT</sup> »</h5>
                <p style="font-size: 25px; letter-spacing: 10px;"  class="display-1 text-white mb-md-4 animated zoomIn">Notre Boutique en ligne</p>
                <a style=" text-transform: uppercase;" href="https://www.postemarket.cd" target="_blank" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"><span class="fa fa-shopping-bag"></span> Visiter notre boutique</a>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <img class="w-100" src="/assets/downloaded/banner.png" style="height:550px;" alt="Image">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div class="p-3" style="max-width: 900px;">
                <h5 class="text-white text-uppercase mb-3 animated slideInDown">« ON <sup>BY SCPT</sup> »</h5>
                <h6 class="display-1 text-white mb-md-4 animated zoomIn">La Triple Play en RDC</h6>
                <a style="display: none;" href="#" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"><span class="fa fa-check"></span> Souscrire</a>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <!-- Navbar & Carousel End -->

    <About/>

    <Services/>

    <OffresON/>

    <Souscrire/>

    <Team/>

    <Blog/>

    <Partners/>

    <!-- Features Start -->
    <div  style="display:none;" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Pourquoi nous choisir?</h5>
          <h1 class="mb-0">Offres flexibles et économique</h1>
        </div>
        <div class="row g-5">
          <div class="col-lg-4">
            <div class="row g-5">
              <div class="col-12 wow zoomIn" data-wow-delay="0.2s">
                <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                  <i class="fa fa-truck text-white"></i>
                </div>
                <h4>La Poste</h4>
                <p class="mb-0">Postez vos colis en toute tranquilité et profitez </p>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.6s">
                <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                  <i class="fa fa-wifi text-white"></i>
                </div>
                <h4>Internet haut débit illimité</h4>
                <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
              </div>
            </div>
          </div>
          <div class="col-lg-4  wow zoomIn" data-wow-delay="0.9s" style="min-height: 350px;">
            <div class="position-relative h-100">
              <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="/assets/img/feature.jpg" style="object-fit: cover;">
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row g-5">
              <div class="col-12 wow zoomIn" data-wow-delay="0.4s">
                <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                  <i class="fa fa-users-cog text-white"></i>
                </div>
                <h4>Professionalisme</h4>
                <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
              </div>
              <div class="col-12 wow zoomIn" data-wow-delay="0.8s">
                <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style="width: 60px; height: 60px;">
                  <i class="fa fa-phone-alt text-white"></i>
                </div>
                <h4>24/7 Support</h4>
                <p class="mb-0">Magna sea eos sit dolor, ipsum amet lorem diam dolor eos et diam dolor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Features Start -->

    <!-- Testimonial Start -->
    <div style="display:none;" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-4 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Testimonial</h5>
          <h1 class="mb-0">What Our Clients Say About Our Digital Services</h1>
        </div>
        <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
          <div class="testimonial-item bg-light my-4">
            <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img class="img-fluid rounded" src="/assets/img/testimonial-1.jpg" style="width: 60px; height: 60px;" >
              <div class="ps-4">
                <h4 class="text-primary mb-1">Client Name</h4>
                <small class="text-uppercase">Profession</small>
              </div>
            </div>
            <div class="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </div>
          </div>
          <div class="testimonial-item bg-light my-4">
            <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img class="img-fluid rounded" src="/assets/img/testimonial-2.jpg" style="width: 60px; height: 60px;" >
              <div class="ps-4">
                <h4 class="text-primary mb-1">Client Name</h4>
                <small class="text-uppercase">Profession</small>
              </div>
            </div>
            <div class="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </div>
          </div>
          <div class="testimonial-item bg-light my-4">
            <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img class="img-fluid rounded" src="/assets/img/testimonial-3.jpg" style="width: 60px; height: 60px;" >
              <div class="ps-4">
                <h4 class="text-primary mb-1">Client Name</h4>
                <small class="text-uppercase">Profession</small>
              </div>
            </div>
            <div class="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </div>
          </div>
          <div class="testimonial-item bg-light my-4">
            <div class="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
              <img class="img-fluid rounded" src="/assets/img/testimonial-4.jpg" style="width: 60px; height: 60px;" >
              <div class="ps-4">
                <h4 class="text-primary mb-1">Client Name</h4>
                <small class="text-uppercase">Profession</small>
              </div>
            </div>
            <div class="pt-4 pb-5 px-5">
              Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Testimonial End -->

    <Modal>
      <BlogView/>
    </Modal>

    <!-- Footer !-->
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/sections/Footer.vue";
import About from "@/sections/About.vue";
import Services from "@/sections/Services.vue";
import OffresON from "@/sections/OffresON.vue";
import Souscrire from "@/sections/Souscrire.vue";
import Team from "@/sections/Team.vue";
import Blog from "@/sections/Blog.vue";
import Partners from "@/sections/Partners.vue";
import Modal from "@/components/Modal.vue";
import BlogView from "@/components/BlogView.vue";
export default {
  name: "Home",
  components: {Modal, Footer,About,Services,OffresON,Souscrire,Team,Blog,Partners,BlogView},
  mounted() {
    this.$store.dispatch("getHomeContent");
  }
}
</script>

<style scoped>

</style>