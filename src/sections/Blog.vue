<template>
  <div>
    <!-- Blog Start -->
    <div id="blog" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h5 class="fw-bold text-primary text-uppercase">Article</h5>
          <h1 class="mb-0">Nos derniers articles</h1>
        </div>
        <div class="row g-5">
          <div v-for="article in articles" :key="article" class="col-lg-3 wow slideInUp" data-wow-delay="0.3s">
            <div class="blog-item bg-light rounded overflow-hidden">
              <div class="blog-img position-relative overflow-hidden">
                <img class="img-fluid" :src="$resolvePath(article.img_cover)" style="width:100%; height:235px;" alt="">
                <a style="display:none;" class="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href="">xxxxxx</a>
              </div>
              <div class="p-4">
                <div class="d-flex mb-3">
                  <small style="display:none;" class="me-3"><i class="far fa-user text-primary me-2"></i>John Doe</small>
                  <small><i class="far fa-calendar-alt text-primary me-2"></i>{{article.date}}</small>
                </div>
                <h4 class="mb-3" style=" width:100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{article.titre}} </h4>
                <p style="display: none; height:50px; white-space: normal; overflow: hidden; text-overflow: ellipsis;" v-html="article.content"></p>
                <router-link :to="{name:'article',params:{id:article.id}}" class="text-uppercase" tag="a">Lire l'article <i class="bi bi-arrow-right"></i></router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Blog Start -->
  </div>
</template>

<script>
export default {
  name: "Blog",
  props:{
    limit:{
      type:Number,
      default:undefined
    }
  },
  computed:{
    articles()
    {

      var articles=this.$store.getters.GET_ARTICLES;

      if(this.limit!=undefined && this.limit<articles.length)
      {
        var data=[];
        for(var i=0; i<this.limit; i++)
        {
          data.push(articles[i]);
        }

        return data;
      }

      return articles;
    }
  },
  methods:{
    async fecthContent()
    {
      await this.$store.dispatch("getHomeContent");
      await this.$store.dispatch("getCoverImage");
    }
  },
  mounted() {

    this.fecthContent();
  }
}
</script>

<style scoped>

</style>