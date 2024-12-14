import Article from "@/store/models/Article.js";
import axios from "axios";

export default{
    /**
     * Method to get content of the home page.
     */
    async getHomeContent({state,commit})
    {
        var {data}=await axios.get(state.baseUrl);
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

    }
}