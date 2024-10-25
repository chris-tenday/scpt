<template>
  <div>
    <!-- Facts Start -->
    <div class="container-fluid facts py-5 pt-lg-0">
      <div class="container py-5 pt-lg-0">
        <div class="row gx-0">
          <div class="col-lg-4 wow zoomIn"  data-wow-delay="0.1s">
            <div class="bg-warning shadow d-flex align-items-center justify-content-center p-4" style=" height: 150px;">
              <div class="bg-white d-flex align-items-center justify-content-center rounded mb-2" style="width: 60px; height: 60px;">
                <i class="fa fa-users text-primary"></i>
              </div>
              <div class="ps-4">
                <h5 class="text-white mb-0">Utilisateurs</h5>
                <h1 class="text-white mb-0" data-toggle="counter">+ 4 millions</h1>
              </div>
            </div>
          </div>
          <div class="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
            <div class="bg-light shadow d-flex align-items-center justify-content-center p-4" style="height: 150px;">
              <div class="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style="width: 60px; height: 60px;">
                <i class="fa fa-truck text-white"></i>
              </div>
              <div class="ps-4">
                <h5 class="text-primary mb-0 ">Colis postés</h5>
                <h1 class="mb-0" data-toggle="">+450.000</h1>
              </div>
            </div>
          </div>
          <div class="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
            <div class="bg-warning shadow d-flex align-items-center justify-content-center p-4" style="height: 150px;">
              <div class="bg-white d-flex align-items-center justify-content-center rounded mb-2" style="width: 60px; height: 60px;">
                <i class="fa fa-shopping-bag text-primary"></i>
              </div>
              <div class="ps-4">
                <h5 class="text-white mb-0">Articles</h5>
                <h1 class="text-white mb-0" data-toggle="">+600</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Facts Start -->
  </div>
</template>

<script>
export default {
  name: "Fact"
}
</script>

<style scoped>

</style>