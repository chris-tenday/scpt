<template>
  <div>
    <RouterView/>
    <!--<TestPage/> !-->
  </div>
</template>
<script>
import Home from "@/pages/Home.vue";
import TestPage from "@/pages/TestPage.vue";
export default{
  components:{Home,TestPage}
}
</script>