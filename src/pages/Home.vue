<template>
  <div>
    <!-- Topbar Start -->
    <div class="container-fluid bg-dark px-5 d-none d-lg-block">
      <div class="row gx-0">
        <div class="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
          <div class="d-inline-flex align-items-center" style="height: 45px;">
            <small class="me-3 text-light"><i class="fa fa-map-marker-alt me-2"></i>Boulevard du 30 juin , Kinshasa - Gombe</small>
            <small class="text-light"><i class="fa fa-envelope-open me-2"></i>info@scpt.cd</small>
          </div>
        </div>
        <div class="col-lg-4 text-center text-lg-end">
          <div class="d-inline-flex align-items-center" style="height: 45px;">
            <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://x.com/scptrdc?s=11" target="_blank"><i class="fab fa-twitter fw-normal"></i></a>
            <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.facebook.com/scptRDC" target="_blank"><i class="fab fa-facebook-f fw-normal"></i></a>
            <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.instagram.com/scpt_rdc?igsh=ZmpicTVsdGNzcGVt" target="_blank"><i class="fab fa-instagram fw-normal"></i></a>
            <a class="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href="https://www.youtube.com/@scptinfo8620" target="_blank"><i class="fab fa-youtube fw-normal"></i></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar & Carousel Start -->
    <div class="container-fluid position-relative p-0">
      <nav class="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
        <router-link :to="{name:'home'}" class="navbar-brand p-0">
          <h1 style="display: none;" class="m-0"><i class="fa fa-user-tie me-2"></i>SCPT</h1>
          <img :src="$resolvePath('/assets/downloaded/logo.png')" style="width:70px; height:70px;" alt="">
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span class="fa fa-bars"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav ms-auto py-0">
            <router-link :to="{name:'home'}" class="nav-item nav-link active" ><i class="fa fa-home"></i> Accueil</router-link>
            <div class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
              <div class="dropdown-menu m-0">
                <router-link :to="{name:'laposte'}" class="dropdown-item">La Poste</router-link>
                <router-link :to="{name:'codepostal'}" class="dropdown-item">Code Postal</router-link>
                <router-link :to="{name:'ems'}" class="dropdown-item">EMS</router-link>
                <router-link :to="{name:'postemarket'}" class="dropdown-item">Poste Market</router-link>
                <router-link :to="{name:'on'}" class="dropdown-item">ON<sup>by SCPT</sup></router-link>
                <router-link :to="{name:'hosting'}" class="dropdown-item">Hosting<sup>.CD</sup></router-link>
                <router-link :to="{name:'postefinance'}" class="dropdown-item">Poste Finance</router-link>
                <router-link :to="{name:'telecom'}" class="dropdown-item">Télécommunication</router-link>
                <router-link :to="{name:'immobilier'}" class="dropdown-item">Immobilier</router-link>
                <router-link :to="{name:'yeloo'}" class="dropdown-item">Yeloo</router-link>
              </div>
            </div>

            <router-link :to="{name:'blog'}" class="nav-item nav-link">Articles</router-link>
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
            <router-link :to="{name:'contact'}" class="nav-item nav-link">Contact</router-link>
          </div>
          <button style="visibility: hidden;"  type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
          <a style="visibility: hidden;" href="#" class="btn btn-primary py-2 px-4 ms-3"></a>
        </div>
      </nav>

      <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="w-100" :src="$resolvePath(banner.image_1)" style="max-height: 650px;"  alt="Image">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div class="p-3" style="max-width: 900px;">
                <h4 style="" class="text-white text-uppercase mb-3 animated slideInDown">Société Congolaise des Postes et Télécommunication</h4>
                <p  style="display:none; font-size: 25px; letter-spacing: 10px;"  class="display-1 text-white mb-md-4 animated zoomIn">Notre Boutique en ligne</p>
                <a style="display:none; text-transform: uppercase;" href="https://www.postemarket.cd" target="_blank" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight"><span class="fa fa-shopping-bag"></span> Visiter notre boutique</a>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <img class="w-100" :src="$resolvePath(banner.image_2)" style="max-height: 650px;" alt="Image">
            <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div class="p-3" style="max-width: 900px;">
                <h5 style="display:none;" class="text-white text-uppercase mb-3 animated slideInDown">« ON <sup>BY SCPT</sup> »</h5>
                <h6 style="display:none;" class="display-1 text-white mb-md-4 animated zoomIn">La Triple Play en RDC</h6>
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

    <!--<Services/> !-->

    <OffresON/>



    <Souscrire/>

    <Team/>

    <Blog limit="4"/>

    <Partners/>

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
import Yeloo from "@/sections/Yeloo.vue";
import Hosting from "@/sections/HostingSection.vue";
export default {
  name: "Home",
  components: {Hosting, Yeloo, Modal, Footer,About,Services,OffresON,Souscrire,Team,Blog,Partners,BlogView},
  methods:{
    async fetchContent()
    {
      await this.$store.dispatch("getHomeContent");
      await this.$store.dispatch("getCoverImage");
    }
  },
  computed:{
    banner(){
      return this.$store.state.section_banner;
    },
  },
  mounted() {
    this.fetchContent()
  }
}
</script>

<style scoped>

</style>