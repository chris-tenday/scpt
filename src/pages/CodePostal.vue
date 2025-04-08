<template>
  <div>
    <Header page-title="Annuaire des codes postaux congolais" />

    <div id="services" class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
      <div class="container">
        <h2 class="">BIENVENUE A LA SCPT - Annuaire des codes postaux congolais</h2>
        <p>Cet annuaire du code postal vous permet d’identifier les codes des adresses postales(quartiers, communes, secteurs, chefferies et bureaux des Postes) des provinces. villes et territoires.</p>
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

    <Souscrire tel="codepostal@scpt.cd"/>
    <Footer/>
  </div>
</template>

<script>
import Souscrire from "@/sections/Souscrire.vue";
import {unref,toRaw} from "vue";

export default {
  components:{Souscrire},
  data(){
    return {
      searchingProvince:null,
      province:"* Selectionner province",
      ville: {ville:"* Selectionner ville",codes:[]},
      searchingCommune:"",
      searchingQuartier:"",
      villes:[],
      communes:[],
      searchingCodePostal:"",
      searchData:[],
      loading:false,
      searched:false

    };
  },
  computed:{
    codesPostal(){
      var data = this.$store.state.codesPostal;
      return data;
    }
  },
  methods:{
    display(val)
    {
      val = val.replaceAll("______",")");
      val = val.replaceAll("_____","(");
      val = val.replaceAll("____","/");
      val = val.replaceAll("___","-");
      val = val.replaceAll("__","'");
      val = val.replaceAll("_"," ");
      return val;
    },
    pickProvince(province){

      this.searchingQuartier = "";
      this.searchingProvince = this.codesPostal[province];
      this.ville = this.searchingProvince[0];
      this.searchingCommune = Object.keys(toRaw(this.ville.codes))[0];
      ////console.log(this.searchingProvince);
    },
    pickVille()
    {
      this.searchingCommune = "";
      this.searchingQuartier = "";
      ////console.log("Pick ville..");
      ////console.log(toRaw(Object.keys(this.ville.codes)));
      if(this.ville.ville.includes("territoire"))
      {
        /** handle territoire */
        //console.log("territoire....");
        this.searchingCommune = Object.keys(toRaw(this.ville.codes))[0];
        //console.log(this.searchingCommune);
      }
      //console.log(toRaw(this.ville.codes))
    },
    filterData()
    {
      //console.log(this.searchingQuartier);
      this.searched = false;
      this.loading = true;
      this.searchData = [];
      setTimeout(() =>
      {
        this.searched = true;
        this.loading = false;
        //this.searchData = this.ville.codes[this.searchingCommune];
        this.searchData.push(this.searchingQuartier);
      } ,5000);
    },
    pickCommune(commune){
      this.searchingCommune = commune;
    },
    searchPlace()
    {
      this.searched = false;
      this.searchData = [];
      this.loading = true;

      for(let province in this.codesPostal)
      {
        /** search province one by one */
        let data = this.codesPostal[province];
        let rawData = toRaw(data)

        /** search ville one by one */
        for(let i =0; i < rawData.length; i++)
        {
          let ville = rawData[i];

          for(let commune in ville.codes)
          {
            /** search commune by commune */
                //let result = rawData[commune].find(item => String(item.code) === String(this.searchingCodePostal));
            let result = ville.codes[commune].find(item => String(item.code) === String(this.searchingCodePostal));

            if (result)
            {
              this.searchData = [];
              this.searchData.push(result);
              break;
            }
          }

        }


      }
      setTimeout(() =>
      {
        this.searched = true;
        this.loading = false;
      } ,2000);
    }
  },
  mounted() {
    this.province = Object.keys(this.codesPostal)[0];
    this.pickProvince(this.province);
  }
}
</script>