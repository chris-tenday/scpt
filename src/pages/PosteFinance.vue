<template>
  <div>
    <Header page-title="Poste Finance"/>

    <div id="about" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-7">
            <div class="section-title position-relative pb-3 mb-5">
              <h1 class="mb-0">C'est quoi la Poste Finances?</h1>
            </div>
            <p class="mb-4">
              Dans le cadre des services financiers de la Poste, Poste Finances offre à ses clients un moyen pratique, sûr et sécurisé de gérer leurs finances.

              Vous bénéficiez d’un réseau inégalable des bureaux de Poste et d’un large éventail des produits et services aux particuliers, aux entreprises publiques et privées ainsi qu’au Gouvernement.</p>
            <div class="row g-0 mb-3">
              <div class="section-title position-relative pb-3 mb-5">
                <h1 class="mb-0">Pourquoi la Poste Finances?</h1>
              </div>
              <p class="mb-4">
                La Poste Finances vient vous faciliter la vie pour tout ce qui concerne les opérations financières💵💳

                Ses services sont accessibles à tous et partout.

                Vous voulez effectuer une opération financière ? (Retraits et envois Orange Money, M-pesa, Airtel Money, Moneygram, western union, etc.) rendez-vous à 📍l’hôtel de Poste situé au 1009, Boulevard du 30 Juin, Kinshasa – Gombe.
              </p>
            </div>
          </div>
          <div class="col-lg-5" style="min-height: 500px;">
            <div class="position-relative h-100">
              <img class="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" :src="$resolvePath('/assets/downloaded/postefinance.jpg')" style="object-fit: cover;">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Pricing Plan Start -->
    <div id="on" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h1 class="mb-0">Nos services</h1>
        </div>
        <div class="row g-0">
          <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
            <div class="bg-light rounded">
              <div class="border-bottom py-4 px-5 mb-4">
                <h4 class="text-primary mb-1" style="text-transform: uppercase;">Aux Entréprises</h4>
              </div>
              <div class="p-5 pt-0">
                <div class="d-flex justify-content-between mb-3"><span>Ouverture de compte courant Chèque Postal</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span>Services d’encaissement des factures</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span>Paiements de salaire</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span>Bureau de change</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span>Service de découvert</span><i class="fa fa-check text-primary pt-1"></i></div>

              </div>
            </div>
          </div>
          <div class="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
            <div class="bg-white rounded shadow position-relative" style="z-index: 1;">
              <div class="border-bottom py-4 px-5 mb-4">
                <h4 class="text-primary mb-1" style="text-transform: uppercase;">Aux Particuliers</h4>
              </div>
              <div class="p-5 pt-0">
                <div class="d-flex justify-content-between mb-3"><span>Ouverture de compte courant Chèque Postal</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span>Transfert d’argent: western union,Money gram,Flash cash</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span>Paiement facture Télé ( Canal+, Easy Tv, startime, Bluetsat)</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span>Mobile Money (M-PESA, ORANGE money)</span><i class="fa fa-check text-primary pt-1"></i></div>
                <div class="d-flex justify-content-between mb-3"><span>Recharge unités ( Vodacom, Airtel, Orange, Africell)</span><i class="fa fa-check text-primary pt-1"></i></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pricing Plan End -->


    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h1 class="mb-0">Bientot Xcel sur le marché...</h1>
          <p>Poste compte va bientôt lancé sur le marché sa plate forme Mobile de paiement numérique dénommée POSTE FINANCES Xcel.</p>
          <p>Une plateforme qui offira des services bancaires et des paiements ainsi que d’autres services numériques pratiques à sa clientèle, répondant rapidement à leurs besoins financiers en constante évolution, tout en créant de la valeur pour le secteur financier.</p>
        </div>
        <div class="row g-5">
          <div class="col-md-12">
            <img :src="$resolvePath('/assets/downloaded/finances.jpg')" style="width:100%; max-height:350px;" alt="">
          </div>
        </div>
      </div>
    </div>

    <Partners/>
    <Footer/>
  </div>
</template>

<script>
import Header from "@/sections/Header.vue";
import Partners from "@/sections/Partners.vue";
import Footer from "@/sections/Footer.vue";
export default {
  name: "PosteFinance",
  components: {Footer, Partners, Header}
}
</script>

<style scoped>

</style>