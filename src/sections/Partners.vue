<template>
  <div>
    <!-- Vendor Start -->
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s" style="display:none; border:1px solid red; padding: 20px;">
      <div class="container py-5 mb-5">
        <div class="bg-white">
          <div class="owl-carousel vendor-carousel">
            <img :src="$resolvePath('/assets/downloaded/ptntic.jpg')" style="height:70px; width:70px;" alt="">
            <img :src="$resolvePath('/assets/downloaded/upap-logo.png')" style="height:70px; width:70px;" alt="">
            <img :src="$resolvePath('/assets/downloaded/upu-logo.png')" style="height:70px; width:70px;" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- Vendor End -->
  </div>
</template>

<script>
export default {
  name: "Partners"
}
</script>

<style scoped>

</style>