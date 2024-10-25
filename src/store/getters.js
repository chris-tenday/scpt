import cacheStore from "@/store/cacheStore.js";

export default {
    GET_ARTICLES:function(state){
        var cache=cacheStore.getCache("articles");
        var data;
        if(cache!=undefined && cache!=null)
        {
            data=cache;
        }
        else
        {
            data=state.articles;
        }

        return data;
    }
}