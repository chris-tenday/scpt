import cacheStore from "@/store/cacheStore.js";

export default{
    SET_ARTICLES: (state,data)=>{
        cacheStore.cache("articles",data);
        state.articles=data
    },
    UPDATE_ARTICLE:(state,data)=>{
        var i=data[0];
        state.articles[i].img_cover=data[1]
        cacheStore.cache("articles",state.articles);
    }
}