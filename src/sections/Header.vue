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

    <!-- Navbar Start -->
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
            <a href="/" class="nav-item nav-link active" ><i class="fa fa-home"></i> Accueil</a>
            <a href="/#services" class="nav-item nav-link">Services</a>
            <a href="/#blog" class="nav-item nav-link">Articles</a>
            <div style="display: none;" class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Blog</a>
              <div class="dropdown-menu m-0">
                <a href="blog.html" class="dropdown-item">Blog Grid</a>
                <a href="detail.html" class="dropdown-item">Blog Detail</a>
              </div>
            </div>
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
            <a href="/#souscrire" class="nav-item nav-link">Contact</a>
          </div>
          <button style="visibility: hidden;"  type="button" class="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
          <a style="visibility: hidden;" href="#" class="btn btn-primary py-2 px-4 ms-3"></a>
        </div>
      </nav>

      <div class="container-fluid bg-primary py-5 bg-header" style="background: linear-gradient(rgba(9, 30, 62, .7), rgba(9, 30, 62, .7)), url('/assets/downloaded/finances.jpg') center center no-repeat; background-size: cover;  margin-bottom: 90px;">
        <div class="row py-5">
          <div class="col-12 pt-lg-5 mt-lg-5 text-center">
            <h1 class="display-4 text-white animated zoomIn">{{pageTitle}}</h1>
          </div>
        </div>
      </div>
    </div>
    <!-- Navbar End -->
  </div>
</template>

<script>
export default {
  name: "Header",
  props:{
    pageTitle:String
  }
}
</script>

<style scoped>

</style>