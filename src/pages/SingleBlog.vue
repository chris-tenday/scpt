<template>
  <div>
    <Header page-title="Article"/>

    <!-- Blog Start -->
    <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-8">
            <!-- Blog Detail Start -->
            <div class="mb-5">
              <img class="img-fluid w-100 rounded mb-5" :src="$resolvePath(article.img_cover)" alt="">
              <h1 class="mb-4">{{article.titre}}</h1>
              <p>{{article.content}}</p>

            </div>
            <hr>
            <p><span class="fa fa-calendar"></span> {{article.date}}</p>
          </div>

          <!-- Sidebar Start -->
          <div class="col-lg-4">
            <!-- Recent Post Start -->
            <div class="mb-5 wow slideInUp" data-wow-delay="0.1s">
              <div class="section-title section-title-sm position-relative pb-3 mb-4">
                <h3 class="mb-0">Autres articles</h3>
              </div>
              <div v-for="article in articles" :key="article" class="d-flex rounded overflow-hidden mb-3">
                <img class="img-fluid" :src="$resolvePath(article.img_cover)" style="width: 100px; height: 100px; object-fit: cover;" alt="">
                <a href="" class="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0" style="width:100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{article.titre}}</a>
              </div>

            </div>
            <!-- Recent Post End -->

          </div>
          <!-- Sidebar End -->
        </div>
      </div>
    </div>
    <!-- Blog End -->

    <Partners/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/sections/Header.vue";
import Partners from "@/sections/Partners.vue";
import Footer from "@/sections/Footer.vue";
export default {
  name: "SingleBlog",
  components: {Header,Partners,Footer},
  computed:{
    article()
    {
      var id=this.$route.params.id;

      var articles=this.$store.getters.GET_ARTICLES;
      var article;
      for(var i=0; i<articles.length; i++)
      {
        if(articles[i].id==id)
        {
           article=articles[i];
           break;
        }
      }
      return article;
    },
    articles()
    {
      return this.$store.getters.GET_ARTICLES;
    }
  },
  mounted() {
  }
}
</script>

<style scoped>

</style>