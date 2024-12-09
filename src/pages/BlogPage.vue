<template>
  <div>
    <Header page-title="Nos articles"/>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <Blog/>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

</style>
<script setup lang="ts">
import Header from "@/sections/Header.vue";
import Blog from "@/sections/Blog.vue";
</script>