<template>
  <div>
    <Header page-title="Nous contacter"/>

    <Souscrire :show-head="false"/>

    <section id="contact" class="contact section" style="margin-top: -120px">
      <div class="container-fluid map-container" >
        <div class="map-overlay"></div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d127315.36770345917!2d15.2613435!3d-4.2966036!3m2!1i1024!2i768!4f13.1!2m1!1sscpt!5e0!3m2!1sfr!2scd!4v1770124197090!5m2!1sfr!2scd"
            width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>

    <Footer/>

  </div>
</template>

<script>
import Header from "@/sections/Header.vue";
import Footer from "@/sections/Footer.vue";
import {useContact} from "@/composables/useContact.js";
import Souscrire from "@/sections/Souscrire.vue";
export default {
  name: "Contact",
  setup(){
    const obj=useContact();

    return {
      name:obj.name,
      email:obj.email,
      telephone:obj.telephone,
      message:obj.message,
      sendContact:obj.sendContact,
      isLoading:obj.isLoading
    };
  },
  components: {Souscrire, Footer, Header},
  computed:{
    contact(){
        return this.$store.state.section_contact;
    }
  },
  methods:{

  }
}
</script>

<style scoped>

</style>