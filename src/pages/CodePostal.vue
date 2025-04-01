<template>
  <div>
    <Header page-title="Annuaire des codes postaux congolais" />


    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h2 class="mb-0"> Que recherchez-vous <span class="fa fa-question"></span></h2>
        </div>
        <div class="row mb-5">

          <div class="container mt-5">
            <!-- Tabs Navigation -->
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true"><span class="fa fa-map"></span> Cliquez ici pour rechercher le code postal d'un lieu</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false"><span class="fa fa-map-marker"></span> Cliquez ici pour rechercher le lieu d'un code postal</a>
              </li>
            </ul>

            <!-- Tabs Content -->
            <div class="tab-content mt-3" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="row d-flex justify-content-center" >
                  <div class="col-md-9" >
                    <form>
                      <div class="row">
                        <div class="col-md-4 mb-1">
                          <select name="" id="" class="form-control" style="height:50px;">
                            <option value="">* Selectionner province</option>
                            <option value="">Kinshasa</option>
                            <option value="">Kongo-central</option>
                          </select>
                        </div>
                        <div class="col-md-5 mb-1">
                          <select name="" id="" class="form-control" style="height:50px;">
                            <option value="">* Selectionner commune/territoire</option>
                            <option value="">Ngaliema</option>
                            <option value="">Kintambo</option>
                          </select>
                        </div>
                        <div class="col-auto">
                          <button type="submit" class="btn btn-primary" style="height:50px;"><span class="fa fa-search"></span> Recherche</button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <div class="row d-flex justify-content-center" >
                  <div class="col-md-9" >
                    <form>
                      <div class="row">
                        <div class="col-md-9 mb-1">
                          <input type="text" class="form-control" placeholder="Entrez le code postal" style="height:50px;">
                        </div>
                        <div class="col-auto">
                          <button type="submit" class="btn btn-primary" style="height:50px;"><span class="fa fa-search"></span> Recherche</button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div class="row">
          <div v-for="i in 8" class="col-md-3 mb-5" >
            <div class="p-1" style="border-radius: 5px; border: 1px solid lightgray; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);">
              <div>
                <p style="background-color:#06a3da; padding: 5px; color: white; font-weight: bold;">Quartier/Secteur/Chefferie</p>
                <p style="padding: 5px;">ANCIENS-COMBATANTS</p>
              </div>
              <div>
                <p style="background-color:#06a3da; padding: 5px; color: white; font-weight: bold;">Commune/Territoire</p>
                <p style="padding: 5px;"> Ngaliema</p>
              </div>
              <div>
                <p style="background-color:#06a3da; padding: 5px; color: white; font-weight: bold;">Code Postal</p>
                <p style="padding: 5px; font-weight: bold;"> 1002010</p>
              </div>
            </div>


          </div>

        </div>
      </div>
    </div>

    <Souscrire tel="info@scpt.cd"/>
    <Footer/>
  </div>
</template>

<script setup lang="ts">


import Header from "@/sections/Header.vue";
import Footer from "@/sections/Footer.vue";
import Souscrire from "@/sections/Souscrire.vue";
</script>