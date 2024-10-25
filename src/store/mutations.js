import cacheStore from "@/store/cacheStore.js";

export default{
    SET_ARTICLES: (state,data)=>{
        cacheStore.cache("articles",data);
        state.articles=data
    }
}