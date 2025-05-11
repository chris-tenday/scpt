<template>
  <div>
    <!-- Pricing Plan Start -->
    <div id="on" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <img :src="$resolvePath('/assets/downloaded/onbox2.png')" style="width:120px;" alt="">
          <h5 style="display:none;" class="fw-bold text-primary text-uppercase">Pricing Plans</h5>
          <h1 class="mb-0">Nos offres ON <sup>by SCPT</sup></h1>
          <p>Profitez d’un accès illimité grâce à l’internet haut débit sur Fibre optique. Détendez-vous avec des saisons complètes de programmes originaux exclusifs sur vos chaînes TV préférées. Profitez d’une Téléphonie illimitée pour contacter tous vos proches.</p>
          <ul class="list-unstyled">
            <li><span class="fa fa-check"></span> Frais d’installation :  <span style="font-weight:bold;">{{ on.installation }}</span></li>
            <li><span class="fa fa-check"></span> Kit Matériel : <span style="font-weight:bold;">{{ on.kit }}</span></li>
          </ul>
        </div>
       <div class="container py-5">
        <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style="max-width: 600px;">
          <h2 class="mb-0"> Que recherchez-vous <span class="fa fa-question"></span></h2>

        </div>

        <div class="row mb-5">

          <div class="container mt-5">
            <!-- Tabs Navigation -->
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" role="presentation">
                <a class="nav-link active" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true" @click="searchData = []"><span class="fa fa-map"></span> Cliquez ici pour rechercher le code postal d'un lieu</a>
              </li>
              <li class="nav-item" role="presentation">
                <a class="nav-link" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false" @click="searchData = []"><span class="fa fa-map-marker"></span> Cliquez ici pour rechercher le lieu d'un code postal</a>
              </li>
            </ul>

            <!-- Tabs Content -->
            <div class="tab-content mt-3" id="myTabContent">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <div class="row d-flex justify-content-center" >
                  <div class="col-md-10" >
                    <form>
                      <div class="row">
                        <div class="col-md-3 mb-1">
                          <label>* Province</label>
                          <select v-model="province" @change="pickProvince(province)" name="" id="" class="form-control" style="height:50px;">
                            <option v-for="province in Object.keys(codesPostal)" :value="province" style="text-transform: capitalize;">
                              {{ display(province) }}</option>

                          </select>
                        </div>
                        <div class="col-md-3 mb-1">
                          <label>* Ville/Territoire</label>
                          <select v-model="ville" @change="pickVille('')" name="" id="  " class="form-control" style="height:50px;">
                            <option v-for="data in searchingProvince" :value="data" style="text-transform: capitalize;">
                              {{ display(data.ville) }}</option>

                          </select>
                        </div>
                        <div class="col-md-3 mb-1" v-if="!ville.ville.includes('territoire')">
                          <label>* Commune/Sec/Cheff.</label>
                          <select v-model="searchingCommune" name="" id="" class="form-control" style="height:50px;" :disabled="(searchingProvince == null)? true : false">
                            <option value="">-- Selectionner --</option>
                            <option v-for="data in Object.keys(ville.codes)" :value="data">{{display(data)}}</option>
                          </select>
                        </div>
                        <div class="col-md-3 mb-1">
                          <label v-if="!ville.ville.includes('territoire')">* Quartier</label>
                          <label for="" v-else>* Commune/Sec/Cheff.</label>
                          <select v-model="searchingQuartier" name="" id="" class="form-control" style="height:50px;" :disabled="(searchingProvince == null)? true : false">
                            <option value="">-- Selectionner --</option>
                            <option v-for="data in ville.codes[this.searchingCommune]" :value="data">{{display(data.quartier)}}</option>
                          </select>
                        </div>
                        <div class="col-auto pt-4">
                          <button type="submit" class="btn btn-primary" style="height:50px;" @click.prevent="filterData" :disabled="searchingQuartier === ''"><span class="fa fa-search"></span> Recherche</button>
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
                          <input type="text" v-model="searchingCodePostal" class="form-control" placeholder="Entrez le code postal" style="height:50px;">
                        </div>
                        <div class="col-auto">
                          <button type="submit" @click.prevent="searchPlace" class="btn btn-primary" style="height:50px;" :disabled="searchingCodePostal.length < 5"><span class="fa fa-search"></span> Recherche</button>
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
          <p v-if="searched" style="font-weight: bold;"> {{ searchData.length }} résultat(s) trouvé(s)</p>
          <div v-if="!loading && searchData.length > 0" v-for="codePostal in searchData" class="col-md-3 mb-5" >
            <div class="p-1" style="border-radius: 5px; border: 1px solid lightgray; box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);">
              <div>
                <p style="background-color:#06a3da; padding: 5px; color: white; font-weight: bold;">Quartier/Secteur/Chefferie</p>
                <p style="padding: 5px;">{{ display(codePostal.quartier) }}</p>
              </div>
              <div>
                <p style="background-color:#06a3da; padding: 5px; color: white; font-weight: bold;">Commune/Territoire</p>
                <p style="padding: 5px;"> {{ display(codePostal.commune) }}</p>
              </div>
              <div>
                <p style="background-color:#06a3da; padding: 5px; color: white; font-weight: bold;">Code Postal</p>
                <p style="padding: 5px; font-weight: bold;"> {{ codePostal.code }}</p>
              </div>
            </div>
          </div>
          <div v-else class="col-md-12 d-flex justify-content-center" style="">
            <img v-if="!loading" :src="$resolvePath('/assets/downloaded/drc-map.png')" class="" style="width:450px; height:450px;" alt="">
            <img v-else :src="$resolvePath('/assets/downloaded/search-loader.gif')" class="" style="width:150px; height:150px;" alt="">

          </div>
        </div>
      </div>
      </div>
    </div>
    <!-- Pricing Plan End -->
  </div>
</template>

<script>
export default {
  name: "OffresPoste",

}
</script>

<style scoped>

</style>