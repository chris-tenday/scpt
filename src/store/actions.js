import Article from "@/store/models/Article.js";
import axios from "axios";

export default{
    /**
     * Method to get content of the home page.
     */
    async getHomeContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl+"/posts");
        console.log("api..");

        var articles=[];
        data.forEach(async (item)=>{
            var article=new Article();
            article.id=item.id;
            article.date=item.date;
            article.titre=item.title.rendered;
            article.content=item.content.rendered;
            article.img_cover="/assets/downloaded/noimage.jpg";
            try {
                article.link=item._links['wp:featuredmedia'][0].href;
            }
            catch (e) {

            }

            articles.push(article);
        });
        commit("SET_ARTICLES",articles);
    },

    async getCoverImage({state,commit})
    {
        for(var i=0; i<state.articles.length;i++)
        {
            try {
                var {data}=await axios.get(state.articles[i].link);
                var img=data.guid.rendered;
                state.articles[i].img_cover=img;
                console.log(state.articles[i].img_cover);
                commit("UPDATE_ARTICLE",[i,img])
            }
            catch (e) {
                console.log(state.articles[i].img_cover);
            }
        }

    },

    async getStaticContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl+"/pages?slug=home");
        var content=data[0].acf;

        commit("SET_BANNER",{
           image_1: content['banner-image-1'],
           image_2:content['banner-image-2']
        });

        commit("SET_MISSION",{
            texte:content['mission-texte'],
            image:content['mission-image']
        });

        commit("SET_CONTACT",{
            email:content.email,
            address:content.address,
            telephone:content.telephone
        });

        commit("SET_HOSTING",{
            texte:content['hosting-texte'],
            image:content['hosting-image']
        });

        commit("SET_TEAMS",{
            pca:content.pca,
            photo_pca:content['photo-pca'],
            dg:content.dg,
            photo_dg:content['photo-dg'],
            dga:content.dga,
            photo_dga:content['dga-photo'],
        });


    },

    async getLaPosteContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl+"/pages?slug=la-poste");
        try {
            var content=data[0].acf;

            commit("SET_LAPOSTE",{
                pourquoi:content['pourquoi-texte'],
                pourquoi_image: content['pourquoi-image'],
                mission:content['mission-texte'],
                image:content['mission-image'],
                telephone:content.telephone
            });
        }catch (e) {

        }

    },

    async getEmsContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl+"/pages?slug=ems");
        try {
            var content=data[0].acf;

            commit("SET_EMS",{
                texte:content.texte,
                logo:content.logo,
                definition:content.definition,
                telephone:content.telephone
            });
        }catch (e) {

        }

    },

    async getPosteMarketContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl+"/pages?slug=postemarket");
        try {
            var content=data[0].acf;

            commit("SET_POSTEMARKET",{
                pourquoi:content.pourquoi,
                offre:content.offre,
                image:content.image
            });
        }catch (e) {

        }

    },

    async getOnContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl+"/pages?slug=on");
        try 
        {
            var content=data[0].acf;

            commit("SET_ON",{
                pourquoi:content.pourquoi,
                debit:content.debit,
                image:content.image,
                telephone:content.telephone,
                installation:content.installation,
                kit:content.kit,
                classique_prix:content.classique_prix,
                evolution_prix:content.evolution_prix,
                maxi_prix:content.maxi_prix,
                business_prix:content.business_prix,
                entreprise_prix:content.entreprise_prix,
            });    
        }
        catch (e) {
            
        }
        
    },

    async getPostefinanceContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl+"/pages?slug=postefinance");
        try
        {
            var content=data[0].acf;

            commit("SET_POSTEFINANCE",{
                quoi:content.quoi,
                pourquoi:content.pourquoi,
                image:content.image
            });
        }
        catch (e) {

        }

    },

    async getTelecomContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl+"/pages?slug=telecommunication");
        try {
            var content=data[0].acf;

            commit("SET_TELECOM",{
                texte:content.texte,
                plan_national:content.plan_national,
                alimentation:content.alimentation,
                kinshasa:content.kinshasa,
                image_1:content.image_1,
                image_2:content.image_2,
            });
        }
        catch (e) {

        }

    },

    async getImmobilierContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl+"/pages?slug=immobilier");
        try {
            var content=data[0].acf;

            commit("SET_IMMOBILIER",{
                texte:content.texte,
                image:content.image,
                telephone:content.telephone
            });
        }
        catch (e) {

        }

    },

    async getYelooContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl+"/pages?slug=yeloo");
        try {
            var content=data[0].acf;

            commit("SET_YELOO",{
                image:content.image,
                telephone:content.telephone
            });
        }
        catch (e) {

        }

    }

}