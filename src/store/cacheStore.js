export default{
    cache:function(key,data){
        /**
         * cache loaded data using session storage.
         */
        var json=JSON.stringify(data); /** stringify the data */
        sessionStorage.setItem(key,json);

        return true;
    },
    getCache(key)
    {
        var cache=sessionStorage.getItem(key);
        if(cache==undefined || cache==null)
        {
            return undefined
        }

        return JSON.parse(cache);
    }
}