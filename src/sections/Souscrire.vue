<template>
  <div id="souscrire" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <section id="contact" class="contact section">
      <div class="container" >
        <div v-if="showHead" class="row">
          <div class="section-title position-relative pb-3 mb-5">
            <h5 class="fw-bold text-primary text-uppercase">Bésoin d'un service?</h5>
            <h1 class="mb-0">Entrez en contact avec notre personnel</h1>
          </div>
        </div>
        <div class="row g-5">
          <div class="col-lg-5">
            <div class="contact-info-wrapper">
              <div class="contact-info-item" >
                <div class="info-icon">
                  <i class="bi bi-geo-alt"></i>
                </div>
                <div class="info-content">
                  <h3>Notre Adresse</h3>
                  <p>{{contact.address}}</p>
                </div>
              </div>

              <div class="contact-info-item" >
                <div class="info-icon">
                  <i class="bi bi-envelope"></i>
                </div>
                <div class="info-content">
                  <h3>Email Address</h3>
                  <p>{{contact.email}}</p>
                </div>
              </div>

              <div class="contact-info-item" >
                <div class="info-icon">
                  <i class="bi bi-clock"></i>
                </div>
                <div class="info-content">
                  <h3>Horaire de service</h3>
                  <p>Lundi - Vendredi: 8h30' - 16h30</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-7">
            <div class="contact-form-card" >


              <form @submit.prevent="sendContact('webmaster@ocpt.cd')" method="post" class="php-email-form">
                <div class="row g-4">
                  <div class="col-md-6">
                    <input v-model="name"  type="text" class="form-control" name="name" id="name" placeholder="Nom complet" required="">
                  </div>

                  <div class="col-md-6">
                    <input v-model="email" type="email" class="form-control" name="email" id="email" placeholder="Email"
                           required="">
                  </div>

                  <div class="col-12">
                    <VuePhoneInput v-model="telephone" mode="international"/>
                  </div>

                  <div class="col-12">
                    <textarea  v-model="message" class="form-control" name="message" id="message" placeholder="Décrivez votre bésoin.." rows="6"
                              required=""></textarea>
                  </div>

                  <div class="col-12">
                    <button :disabled="isLoading" class="btn btn-dark w-100 py-3" type="submit">Envoyer <span class="me-1 spinner-border spinner-border-sm" v-if="isLoading"></span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import {useContact} from "@/composables/useContact.js";

export default {
  name: "Souscrire",
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
  props:{
    tel: {
      type:String,
      default:"info@ocpt.cd"
    },
    showHead:{
      type:Boolean,
      default:true
    }
  },
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