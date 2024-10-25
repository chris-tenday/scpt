<template>
  <div>
    <!-- Full Screen Search Start -->
    <div class="modal fade" id="searchModal" tabindex="-1">
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content" style="background: rgba(9, 30, 62, .7);">
          <div class="modal-header border-0">
            <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body d-flex align-items-center justify-content-center" style="max-height: 400px; overflow-y: auto;">
            <slot></slot>
          </div>
        </div>
      </div>
    </div>
    <!-- Full Screen Search End -->
  </div>
</template>

<script>
export default {
  name: "Modal"
}
</script>

<style scoped>

</style>